---
layout: project
color: "#003FFF"
featured: false
order: 100

title: Wallet app
subtitle: Creating a prototype to pitch to investors
body: |-
  This was a design for a pre-seed A MVP. The client wanted a the demo app to be graphically appealing, so I created a cool design system and then prototyped the first features for the developers to code.
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
    {% include components/project-image.html file_name = "layout-rules" %}
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
    {% include components/project-image.html file_name = "prototyping-auth" %}
    {% include components/project-image.html file_name = "prototyping-dashboard" %}
    {% include components/project-image.html file_name = "prototyping-purchase" %}
    {% include components/project-image.html file_name = "prototyping-transfer" %}
    {% include components/project-image.html file_name = "prototyping-settings" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Design system"
    %}
    {% include components/project-cover.html file_name="mockup-cover" %}
  </div>
</div>
