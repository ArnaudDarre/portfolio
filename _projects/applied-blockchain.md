---
layout: project
color: "#007bff"
featured: false
order: 6

client: Applied Blockchain
title: Blockchain consultancy website
subtitle: Website redesign to improve brand recognition, SEO scores and accessibility
body: |-
  This project was part of the complete rebranding of Applied Blockchain, a blockchain consultancy and development startup. I was brought onboard to redesign and code the website completely in accordance with the company's new brand identity, all the while making sure it aligned with the web best practices of accessibility and improving SEO ranking.
category:
  - Design
  - Development
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
    {% include components/project-cover.html file_name="mockup-cover" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
  {% include components/project-content.html
    title = "Presentation"
    body = "
      <p>The Applied Blockchain website was created when the company was first setup and had evolved without structure, adding blocks on top of each other.</p>
      <p>The company had evolved and expanded, and the first step was to create a sitemap to add the new content while improving the structure, improve SEO and content distribution. The challenge it brought was to keep the top nav bar as simple as possible, hence the introduction of sub menus.</p>
    "
  %}
  {% include components/project-image.html
    file_name = "homepage"
    legend = "Home page – before and after"
  %}
  {% include components/project-image.html
    file_name = "projects"
    legend = "Projects page – before and after"
  %}
  {% include components/project-image.html
    file_name = "about"
    legend = "About page – before and after"
  %}
  {% include components/project-image.html
    file_name = "blog"
    legend = "Blog – before and after"
  %}
  {% include components/project-image.html
    file_name = "contact"
    legend = "Contact page – before and after"
  %}
  </div>
</div>
