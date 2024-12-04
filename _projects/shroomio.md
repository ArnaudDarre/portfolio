---
layout: project
color: "#00FFC4"
visible: true
featured: true
order: 4

title: React component library
subtitle: Bespoke components for React apps
body: |-
  I started building this component library when I started learning React and have been completing it ever since. It's a great way to keep learning, and also to have a collection of resources at hand when I build design systems for new projects.
category:
  - Development

client: Personal project
website:
  url: https://shroomio.arnaud-darre.com/
  label: Go to Storybook project
tags:
  - Design system
  - Web development

---

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html %}
  </div>
</div>

{% capture content %}
  <p>Having learned web development on my own, it was important for me to keep track of everything I was building. This is how this project came to life.</p>
  <p>It's always been important to me to always test new things, either for code or for design, and this projects allows me to do just that. By building a large scale component library, I can experiment and implement things that would always be useful for client projects.</p>
  {% include components/link.html label='Go to Storybook project' type='external' url='https://shroomio.arnaud-darre.com/' %}
{% endcapture %}

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Presentation"
      body = content
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Component examples"
    %}
    <div class="section__content">
      <iframe
        src="https://shroomio.arnaud-darre.com/iframe.html?args=&id=components-interactions-button--guide&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Button component
        {% include components/link.html label='View in Storybook' type='external' url='https://shroomio.arnaud-darre.com/?path=/docs/components-interactions-button--docs' %}
      </figcaption>
    </div>
    <div class="section__content">
      <iframe
        src="https://shroomio.arnaud-darre.com/iframe.html?args=&id=components-mixins-text--guide&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Text component
        {% include components/link.html label='View in Storybook' type='external' url='https://shroomio.arnaud-darre.com/?path=/docs/components-mixins-text--docs' %}
      </figcaption>
    </div>
    <div class="section__content">
      <iframe
        src="https://shroomio.arnaud-darre.com/iframe.html?args=&id=components-data-table--guide&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Table component
        {% include components/link.html label='View in Storybook' type='external' url='https://shroomio.arnaud-darre.com/?path=/docs/components-data-table--docs' %}
      </figcaption>
    </div>
    <div class="section__content">
      <iframe
        src="https://shroomio.arnaud-darre.com/iframe.html?args=&id=components-interactions-alert--guide&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Alert component
        {% include components/link.html label='View in Storybook' type='external' url='https://shroomio.arnaud-darre.com/?path=/docs/components-interactions-alert--docs' %}
      </figcaption>
    </div>
    <div class="section__content">
      <iframe
        src="https://shroomio.arnaud-darre.com/iframe.html?args=&id=components-forms-formfield--guide&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">Form 
        field component
        {% include components/link.html label='View in Storybook' type='external' url='https://shroomio.arnaud-darre.com/?path=/docs/components-forms-formfield--docs' %}
      </figcaption>
    </div>
  </div>
</div>

