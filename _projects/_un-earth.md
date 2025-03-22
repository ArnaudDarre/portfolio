---
layout: project
color: "#d6a881"
featured: false
order: 100

title: "[un]earth"
subtitle: What if aliens discovered a desolated Earth in a millenia
body: |-
 Fast forward a millenia. Earth has become nothing but a heap of ruin. A world forgotten in time and space… Almost. Coming from the outer limits of the cosmos, a race discovers our planet. Seeing it desolate, with no explanation why, they start to dig the surface, excavating the past.
category:
  - Editorial

client: Degree Project
tags:
  - Art Direction
  - Editorial design
  - Illustration

---

<div class="section">
  <div class="section__container">
    {% include components/project-pdf.html 
      file_name = "book"
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Presentation"
      body = "
        <p>[un]earth offers us a vision. One that a civilization from space is going to lay on our society, our lifestyle, our behaviours. A project that uses sience-fiction to speak about the problems in our world, a glimpse that helps us question its methods. This project is a graphic anthology, a history book that tells us a tale, a new myth of world destruction.</p>
        <p>The immersion had to be complete. The aliens have their own writing, a limitless curiosity. They offer us their understanding of our world as they discovered it, and the harvested digital relics, damaged by time.</p>
      "
    %}
  </div>
</div>

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html file_name="mockup-cover" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Collaterals"
      body = "
        <p>This project has been particularly fun because it blended a lot of different mediums and skills. And it allowed me to dive into written storytelling, something that I had only experienced graphically before.</p>
      "
    %}
    {% include components/project-grid.html
      size = 6
      file_name = "illustrations"
      legend = "Thumbnails of the illustrations"
    %}
    {% include components/project-image.html 
      size = "lg"
      file_name = "timeline"
    %}
    {% include components/project-grid.html
      size = 6
      file_name = "timeline"
      legend = "Thumbnails from the timeline"
    %}
  </div>
</div>
