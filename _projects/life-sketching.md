---
layout: project
color: "#000000"
featured: false
order: 100

title: Life Sketching
subtitle: Collection of life sketches
category:
  - Illustration

client: Personal project
tags:
  - Illustration

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
        <p>Sketching helps me focus. It takes my mind of things and is a great way to free your mind when you are stuck in a projects. I started this habbit in Design School and will keep on doing it.</p>
      "
    %}
    {% include components/project-image.html 
      file_name = "3"
    %}
    {% include components/project-image.html 
      size = "md"
      file_name = "19"
    %}
    {% include components/project-image.html 
      size = "md"
      file_name = "21"
    %}
  </div>
</div>
