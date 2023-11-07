---
layout: project
color: "#007bff"
featured: true
order: 3

title: Blockchain consultancy website
subtitle: Website redesign to improve brand recognition and SEO scores
body: |-
  This project was part of the complete re-branding of Applied Blockchain, a blockchain consultancy and development startup. I was brought onboard to create from scratch what would become the company's new brand identity. And the biggest part of that project was the website rebranding.
category: Digital

client: Applied Blockchain
website:
  url: https://appliedblockchain.com/
  label: Visit website
tags:
  - Brand identity
  - Design system
  - Web design
  - Web development

---

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html %}
  </div>
</div>

<div class="section">
  <div class="section__container">
  {% include components/project-content.html
    title = "Presentation"
    body = "
      <p>This project was conducted in-house. The design has been created in collaboration with the second in-house designer and the developement autonomously, from scratch. We used Sketch in InVision for design and collaboration, and coded the website in HTML, SCSS and Javascript using static site generator Jekyll.</p>
    "
  %}
  {% include components/project-image.html
    file_name = "mockup-compare-join"
    legend = "Join page – before and after"
  %}
  {% include components/project-image.html
    file_name = "mockup-compare-media"
    legend = "Media page – before and after"
  %}
  {% include components/project-image.html
    file_name = "mockup-compare-projects"
    legend = "Projects page – before and after"
  %}
  </div>
</div>
