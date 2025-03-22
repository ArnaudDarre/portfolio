---
layout: project
color: "#00FFC4"
featured: true
order: 7

title: React component library
subtitle: Bespoke components for React apps
body: |-
  I started building this component library when I started learning React and have been completing it ever since. It's a great way to keep learning, and also to have a collection of resources at hand when I build design systems for new projects.
category:
  - Development

client: Personal project
website:
  url: https://react.pallote.com
  label: Go to Storybook project
tags:
  - Design system
  - Web development

---

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html file_name="mockup-cover" %}
  </div>
</div>

{% capture content %}
  <p>Having learned web development on my own, it was important for me to keep track of everything I was building. This is how this project came to life.</p>
  <p>It's always been important to me to always test new things, either for code or for design, and this projects allows me to do just that. By building a large scale component library, I can experiment and implement things that would always be useful for client projects.</p>
  {% include components/link.html label='Go to Storybook project' type='external' url='https://react.pallote.com' %}
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
    <figure class="section__content">
      <iframe
        src="https://react.pallote.com/iframe.html?args=&id=components-button--docs&viewMode=docs"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Button component
        {% include components/link.html label='View in Storybook' type='external' url='https://react.pallote.com/?path=/docs/components-button--docs' %}
      </figcaption>
    </figure>
    <figure class="section__content">
      <iframe
        src="https://react.pallote.com/iframe.html?args=&id=utilities-text--docs&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Text component
        {% include components/link.html label='View in Storybook' type='external' url='https://react.pallote.com/?path=/docs/utilities-text--docs' %}
      </figcaption>
    </figure>
    <figure class="section__content">
      <iframe
        src="https://react.pallote.com/iframe.html?args=&id=utilities-color--docs&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Table component
        {% include components/link.html label='View in Storybook' type='external' url='https://react.pallote.com/?path=/docs/utilities-color--docs' %}
      </figcaption>
    </figure>
    <figure class="section__content">
      <iframe
        src="https://react.pallote.com/iframe.html?args=&id=components-checkboxes--docs&viewMode=story"
        height="400"
      ></iframe>
      <figcaption class="project__legend caption">
        Alert component
        {% include components/link.html label='View in Storybook' type='external' url='https://react.pallote.com/?path=/docs/components-checkboxes--docs' %}
      </figcaption>
    </figure>
  </div>
</div>

