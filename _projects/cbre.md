---
layout: project
color: "#003FFF"
visible: true
featured: false
order: 100

title: CBRE
subtitle: Creating a mobile app prototype
body: |-
  This project was to pitch to a potential client to create the mobile app for a tower in the Paris financial district. The whole platform and design system was creted from scratch.
category:
  - Design

tags:
  - Brand identity
  - Design system
  - Mobile design

---

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Layout"
      body = "
        <p>Before starting the fully fledged design, I determined the layout types and created common structures to create balance and harmony between each screen.</p>
      "
    %}
    {% include components/project-image.html file_name = "gabarits" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Prototyping"
      body = "
        <p>Using the layout rules I set in place, I then created scaled up wireframes, to test the user flows but also give the client a more visual representation of their app.</p>
      "
    %}
    {% include components/project-image.html file_name = "home" %}
    {% include components/project-image.html file_name = "interface-1" %}
    {% include components/project-image.html file_name = "interface-2" %}
    {% include components/project-image.html file_name = "interface-3" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-image.html
      file_name = "situation"
      legend = "Mockup"
    %}
  </div>
</div>
