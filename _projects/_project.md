---
layout: project
color: # primary color of the project or client
featured: true # display on homepage carousel and project grid
order: 

client: 
title: 
subtitle: 
body: |-
category: [Digital, Drawing, Editorial, Identity, Posters, Typography, Video] # choose one

website:
  url: 
  label: 
tags: # select maximum 4
  - Art Direction
  - Brand identity
  - Data visualisation
  - Design system
  - Editorial design
  - Illustration
  - Logo design
  - Mobile design
  - Motion design
  - Product design
  - Web design
  - Web development
  - Wireframing

video_id: # vimeo video id if relevant

---

{% include components/project-cover.html %}

{% include components/project-pdf.html %}

{% include components/project-grid.html
  size = 6
%}

{% include components/project-image.html %}

{% include components/project-poster.html %}
