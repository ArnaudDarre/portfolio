---
layout: project
color: "#C6882C"
featured: true
order: 1

title: Bluto
subtitle: E-commerce brand and platform
body: "Bluto was my latest adventure, and the most interesting challenge I came to face in my career, but one I had been dreaming ever since design school: creating my own brand from scratch. I started this company with two friends, and learned so much along the way."
category: Branding

client: Bluto
website:
  url: https://www.bluto.co.uk/
  label: Visit website
tags:
  - Brand identity
  - Editorial design
  - Logo design
  - Product design

---

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      lead='Presentation'
      content='
        <p>I was able to bring everything I had learned so far on my previous roles and use it for a project I cared about deeply and I had started myself. I combined my skills in branding, design systems implentation and UI/UX design to create from scratch a platform that people would acutally use.</p>
      '
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-research'
      legend='Logo research'
    %}
    {% include components/project-image.html
      file_name='mockup-leaflet'
      legend='Advertising leaflet'
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-business-card'
      legend='Business cards'
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-image.html
      size='md'
      file_name='mockup-home'
      legend='Mockup for the homepage'
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-category'
      legend='Mockup for a product category page'
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-product'
      legend='Mockup for a product page'
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-dashboard'
      legend='Mockup for the user dashboard'
    %}
    {% include components/project-image.html
      size='md'
      file_name='mockup-orders'
      legend='Mockup for the order history page'
    %}
  </div>
</div>
