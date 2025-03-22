---
layout: project
color: "#C6882C"
visible: true
featured: false
order: 5

title: E-commerce brand creation
subtitle: Creating the first online artisan bakery in London
body: |-
  This is a challenge I had been dreaming ever since finishing design school: designing my own brand from scratch. I started this company with two friends, and learned so much along the way.
category:
  - Design

client: Bluto
website:
  url: https://www.bluto.co.uk/
  label: Visit website
tags:
  - Brand identity
  - Editorial design
  - Logo design

---

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Research"
      body = "
        <p>Much like every project, I like to start with pen and paper. This apply to branding but also to UI design, as I like the thinking freedom and speed drawing offers.</p>
      "
    %}
    {% include components/project-image.html
      size = "md"
      file_name = "mockup-research"
      legend = "Logo research"
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Brand guidelines"
      body = "
        <p>The goal was to convey a fun yet professional look that would match the values of the brand and the quality of the service, and create a brand identity that would engage with our target audience.</p>
      "
    %}
    {% include components/project-image.html
      size = "md"
      file_name = "logo"
      file_extension = "png"
      legend = "Logo variants"
    %}
    {% include components/project-grid.html
      size = 4
      file_name = "guidelines"
      file_extension = "png"
      legend = "Excerpt from Bluto's guidelines"
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Marketing & branding collaterals"
    %}
    {% include components/project-image.html
      file_name = "mockup-leaflet"
      legend = "Advertising leaflet"
    %}
    {% include components/project-grid.html
      size = 6
      file_name = "collaterals"
      legend = "Business cards"
    %}
  </div>
</div>
