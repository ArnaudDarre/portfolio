/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
	// From https://davidwalsh.name/javascript-debounce-function.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	// Window size.
	let win = {width: window.innerWidth, height: window.innerHeight};
	
	// some animation settings.
	const settings = {
		image: {duration: 900, delay: 0, easing: [0.8,0,0.2,1]},
		title: {duration: 700, delay: 200, easing: [0.8,0,0.2,1]},
		description: {duration: 900, delay: 400, easing: 'easeOutExpo'},
		pagination: {duration: 300, delay: 400, easing: 'easeInOutQuad'},
	};
	
	class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.init();
        }
        init() {
			// DOM elements:
			// title
			this.DOM.title = this.DOM.el.querySelector('.project__title');
			charming(this.DOM.title);
			this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
			// description
			this.DOM.description = this.DOM.el.querySelector('.project__body');
			// image
			this.DOM.image = this.DOM.el.querySelector('.project__cover');
		}
		show(direction) {
			this.isHidden = false;
			return this.toggle(direction);
		}
		hide(direction) {
			this.isHidden = true;
			return this.toggle(direction);
		}
		toggle(direction) {
			this.direction = direction; 
			return Promise.all([this.toggleTitle(!this.isHidden), 
								this.toggleDescription(!this.isHidden),
								this.toggleImage(!this.isHidden)]);
		}
		toggleTitle() {
			anime.remove(this.DOM.titleLetters);
			return anime({
				targets: this.DOM.titleLetters,
				duration: settings.title.duration,
				delay: (target, index) => index * 30 + settings.title.delay,
				easing: settings.title.easing,
				translateY: this.isHidden ? [0,this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
				opacity: {
					value: this.isHidden ? 0 : 1,
					duration: 1,
					delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
				}
			}).finished;
		}
		toggleDescription() {
			anime.remove(this.DOM.description);
			return anime({
				targets: this.DOM.description,
				duration: settings.description.duration,
				delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
				easing: settings.description.easing,
				translateY: this.isHidden ? [0, this.direction === 'next' ? '-10%' : '10%'] : [this.direction === 'next' ? '20%' : '-20%', 0],
				opacity: this.isHidden ? 0 : 1
			}).finished;
		}
		toggleImage() {
			this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`;

			anime.remove(this.DOM.image);
			return anime({
				targets: this.DOM.image,
				duration: settings.image.duration,
				delay: settings.image.delay,
				easing: settings.image.easing,
				translateY: this.isHidden ? ['0%',this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%','0%'],
				scale: !this.isHidden ? [1.8,1] : 1,
				opacity: {
					value: this.isHidden ? 0 : 1,
					duration: 1,
					delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
				}
			}).finished;
		}
    };

    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.init();
        }
        init() {
			// DOM elements.
			this.DOM.menuCtrl = this.DOM.el.querySelector('.sections__header > button.button-menu');
			this.DOM.menu = {
				wrapper: this.DOM.el.querySelector('.menu'),
				items: Array.from(this.DOM.el.querySelectorAll('.menu > .menu__inner > .menu__item')),
				menuCtrls: {
					toggle: this.DOM.el.querySelector('.menu > .menu__toggle'),
					open: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--open'),
					close: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--close')
				}
			};
			this.DOM.pagination = this.DOM.el.querySelector('.sections__index .sections__index-inner');
			this.DOM.navigation = this.DOM.el.querySelector('.sections__nav');
			this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--prev');
			this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--next');
			this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.section'), entry => new Entry(entry));
			this.entriesTotal = this.DOM.entries.length;
			this.currentPos = 0;

			this.layout();
			// Init/Bind events.
			this.initEvents();
		}
		layout() {
			this.currentEntry = this.DOM.entries[this.currentPos];
			
		}
		initEvents() {
			// Navigation
			this.onPrevClick = () => this.navigate('prev');
			this.onNextClick = () => this.navigate('next');
			this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick);
			this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick);
		}
		navigate(direction) {
			if ( this.isEntriesAnimating || this.isFactsAnimating ) return;
			this.isEntriesAnimating = true;
			// Store direction
			this.direction = direction;
			// Update currentPos
			const newPos = this.currentPos = this.direction === 'next' ? 
				this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 : 
				this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1;

			const newEntry = this.DOM.entries[newPos];

			this.update(newEntry);
		}
		update(newEntry) {
			const updateFn = () => {
				// hide the current entry and show the next/previous one.
				// when both updatePageNumber, hide and show are finished:
				Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
					this.isEntriesAnimating = false;
					this.currentEntry.DOM.el.classList.remove('section--current');
					newEntry.DOM.el.classList.add('section--current');
					this.currentEntry = newEntry;
				});
			};

			if ( this.isFactsOpen ) {
				this.toggleFactsContainer().then(updateFn);
			}
			else {
				updateFn();
			}
		}
		updatePageNumber() {
			anime.remove(this.DOM.pagination);
			let halfway = false;
			return anime({
				targets: this.DOM.pagination,
				duration: settings.pagination.duration,
				easing: 'easeInOutQuad',
				translateY: [
					{value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay},
					{value: [this.direction === 'next' ? '100%' : '-100%','0%'], delay: settings.pagination.duration}
				],
				opacity: [
					{value: 0, delay: settings.pagination.delay},
					{value: [0,1], delay: settings.pagination.duration}
				],
				update: (anime) => {
					if ( anime.progress >= 50 && !halfway ) {
						halfway = true;
						this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`;
					}
				}
			}).finished;
		}
		toggleMenu() {
			if ( this.isMenuAnimating ) return;
			this.isMenuAnimating = true;

			const toggleMenuCtrlFn = () => {
				anime.remove([this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close]);
				return anime({
					targets: [this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close],
					duration: settings.menuCtrl.duration,
					easing: settings.menuCtrl.easing,
					opacity: (target, index) => index ? !this.isMenuOpen ? 1 : 0 : !this.isMenuOpen ? 0 : 1,
					translateX: (target, index) => index ? !this.isMenuOpen ? ['50%', '0%'] : '50%' : !this.isMenuOpen ? ['0%', '-50%'] : '0%'
				}).finished;
			};

			const toggleMenuItemsFn = () => {
				anime.remove(this.DOM.menu.items);
				return anime({
					targets: this.DOM.menu.items,
					duration: settings.menuItems.duration,
					easing: settings.menuItems.easing,
					delay: (target, index) => !this.isMenuOpen ? index * 80 : 0,
					translateX: !this.isMenuOpen ? ['5%', '0%'] : '0%',
					opacity: {
						value: !this.isMenuOpen ? [0,1] : 0,
						easing: 'linear',
						delay: (target, index, total) => !this.isMenuOpen ? index * 80 : 0
					}
				}).finished;
			};

			this.DOM.menu.wrapper.classList.toggle('menu--open');

			Promise.all([toggleMenuCtrlFn(), toggleMenuItemsFn()]).then(() => {
				this.isMenuOpen = !this.isMenuOpen
				this.isMenuAnimating = false;
			});
		}
		toggleNavigationCtrls(animeconfig) {
			return this.animate(Object.assign({
				targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
				duration: settings.navigationCtrls.duration,
				easing: settings.navigationCtrls.easing
			}, animeconfig));
		}
		animate(opts) {
			anime.remove(opts.targets);
			return anime(opts).finished;
		}
	};

	// Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('img'), () => {
		document.body.classList.remove('loading');
		// Init
		new Slideshow(document.querySelector('.sections'));
	});
};