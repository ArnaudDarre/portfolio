---
layout: project
color: "#C6882C"
featured: true
order: 4

client: Bluto
title: E-commerce online platform
subtitle: Bespoke web-app and admin system for an online bakery
body: |-
  This was my latest adventure: designing a bespoke e-commerce platform. The goal was to create a tool a tool that would completely match the products that were sold, bread, and we decided to code it from scratch. The result is a bespoke, easy to use, and completely customisable platform.
category:
  - Design
  - Code

website:
  url: https://www.bluto.co.uk/
  label: Visit website
tags:
  - Design system
  - Product design
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
        <p>I was able to bring everything I had learned so far on my previous roles and use it for a project I cared about deeply and I had started myself. I combined my skills in branding, design systems implentation and UI/UX design to create from scratch a platform that people would use in their daily lives.</p>
      "
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "User screens"
      body = "
        <p>This is the most extensive project I have worked on, working on it for more than two years, improving it by adding new features and fine tuning the user experience constantly. Since it was my own project, I had the freedom to experience new things and push the boundaries of Figma.</p>
      "
    %}
    {% include components/project-grid.html
      size = "4"
      file_name = "user"
      file_extension = "png"
      legend = "Collection of user facing screens"
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Admin screens"
      body = "
        <p>Alongside the user facing platform, I also created a full back-office to administrate the platform.</p>
      "
    %}
    {% include components/project-grid.html
      size = "4"
      file_name = "admin"
      file_extension = "png"
      legend = "Collection of admin screens"
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Responsive design"
    %}
    {% include components/project-image.html size = "md" file_name = "screens-home" file_extension = "png" legend = "Website home page" %}
    {% include components/project-image.html size = "md" file_name = "screens-category" file_extension = "png" legend = "Category page" %}
    {% include components/project-image.html size = "md" file_name = "screens-product" file_extension = "png" legend = "Product page" %}
    {% include components/project-image.html size = "md" file_name = "screens-dashboard" file_extension = "png" legend = "User dashboard" %}
    {% include components/project-image.html size = "md" file_name = "screens-orders" file_extension = "png" legend = "User order history page" %}
</div>
