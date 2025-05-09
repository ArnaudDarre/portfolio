---
layout: project
color: "#F3460B"
featured: true
order: 2

client: Archizest
title: Architect firm website
subtitle: Improve admin user experience by implementing a CMS
body: |-
  I was tasked by ADDB to rebuild Archizest's website to allow them complete control over their content. We went for the platform Squarespace for its ease of use, however this brought some technical challenges around customisation and special features like a random quote generator or an introduction slideshow. I was able using bespoke Javascript to overcome those challenges and deliver an elegant website that does not feel like it is built on a website builder.
category:
  - Design
  - Code

website:
  url: https://www.archizest.com/
  label: Visit website
tags:
  - Mobile design
  - Web design
  - Web development

---

<div class="section">
  <div class="section__container">
    {% include components/project-image.html
      file_name = "home"
    %}
    {% include components/project-image.html
      file_name = "extra"
    %}
    {% include components/project-image.html
      file_name = "posts"
    %}
    {% include components/project-image.html
      file_name = "post"
    %}
    {% include components/project-image.html
      file_name = "team"
    %}
    {% include components/project-image.html
      file_name = "about"
    %}
    {% include components/project-image.html
      file_name = "contact"
    %}
    {% include components/project-image.html
      file_name = "credits"
    %}
  </div>
</div>
