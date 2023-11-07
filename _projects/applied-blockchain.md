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
