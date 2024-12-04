---
layout: project
color: "#00aec7"
visible: true
order: 8

title: Creative agency brand identity
subtitle: Rebranding to boost brand awareness and align with the customer base
body: |-
  Design of the logo and the brand guidelines of Watapix, a multi-channel communication agency. Project carried out while working at Watapix.
category:
  - Design

client: Watapix
website:
  url: http://www.watapix.com/
  label: Visit websiste
tags: 
  - Brand identity
  - Editorial design
  - Logo design

---

<div class="section">
  <div class="section__container">
    {% include components/project-pdf.html 
      file_name = "guidelines"
    %}
  </div>
</div>

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-image.html 
      file_name = "mockup-identity"
      legend = "Stationery"
    %}
    {% include components/project-grid.html
      size = 6
      file_name = "applications"
    %}
    {% include components/project-image.html 
      file_name = "mockup-research"
      legend = "First research for the logo"
    %}
  </div>
</div>
