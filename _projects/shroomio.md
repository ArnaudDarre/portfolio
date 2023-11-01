---
layout: project
color: "#00FFC4"
featured: true
order: 3

title: Shroomio
subtitle: Designing my own React component library
body: |-
  I started building this component library when I started learning React and have been completing it ever since. It's a great way to keep learning, and also to have a collection of resources at hand when I build design systems for new projects.
category: Digital

client: Personal project
website:
  url: https://shroomio.arnaud-darre.com/
  label: Go to Storybook project
tags:
  - Design system
  - Web development

---

{% capture content %}
  <p>Having learned web development on my own, it was important for me to keep track of everything I was building. This is how this project came to life.</p>
  <p>It's always been important to me to always test new things, either for code or for design, and this projects allows me to do just that. By building a large scale component library, I can experiment and implement things that would always be useful for client projects.</p>
  {% include components/list-item.html label='Go to Storybook project' type='external' url='https://shroomio.arnaud-darre.com/' %}
{% endcapture %}

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Presentation"
      content = content
    %}
    {% include components/project-cover.html %}
  </div>
</div>
