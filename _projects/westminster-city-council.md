---
layout: project
color: "#OB2265"
featured: true
order: 1

client: Westminster City Council
title: Westminster City Coucil's design system
subtitle: Learnings and challenges of building a design system for local governement
body: |-
  When launching a new service, speed and consistency are crucial, but without the right tools, teams face inefficiencies and redundant work. I was tasked with creating a design system for Westminster City Council. Collaborating with the Research and Design team, I developed a tool that not only enhanced user experience through consistency and accessibility but also improved team collaboration and product scalability.

  More than just boosting efficiency, it transformed how the team works, ensuring every new service delivers a cohesive, high-quality user experience.
category:
  - Design

website:
  url: https://www.westminster.gov.uk/
  label: Visit website
tags:
  - Brand identity
  - Design system
  - Product design

---

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html file_name="mockup-cover" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Objectives and benefits"
      quote = "Implementing the design system reduced the design and build time of new features by 50%"
      body = "
        <p>This work had several objectives, focusing on team workflows and user experience:</p>
        <ul>
          <li>Standardising design elements and patterns to ensure a consistent user experience.</li>
          <li>Establish design and code quality standards.</li>
          <li>Promote accessibility and document best practices.</li>
          <li>Improve team communication.</li>
          <li>Maintain design system standards as it grows.</li>
          <li>Enhance design and development processes.</li>
          <li>Enable products to scale more easily.</li>
        </ul>
      "
    %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Reconciliate to create"
      body = "
        <p>That work had never been done before, so the first challenge was reconciling multiple sources of truth and a complex tech stack with various limitations. We approached this by combining all libraries, analysing them, and creating design components that could be implemented across every tool.</p>
      "
    %}
    {% include components/project-image.html
      file_name = "reconciliation"
      file_extension = "png"
    %}
    {% include components/project-content.html
      title = "Improve accessibility"
      body = "
        <p>Another aspect of the project was conducting an accessibility audit of the components to improve the product's overall accessibility. Visually, this involved fixing hover and focus states of focusable components, which failed colour contrast ratio tests.</p>
      "
    %}
    {% include components/project-grid.html
      size = 4
      file_name = "focus"
      file_extension = "png"
    %}
    {% include components/project-content.html
      title = "Before and after"
      body = "
        <p>Here is an example of before and after the design system was implemented. These screenshots show the entry points for six different services. They were visually inconsistent, but more importantly, their user experience and behaviour patterns differed, creating friction for users and adding unnecessary effort for the product team.</p>
      "
    %}
    {% include components/project-image.html
      file_name = "before-after"
    %}
  </div>
</div>

<div class="section section--fullWidth">
  <div class="section__container">
    {% include components/project-cover.html file_name="screens" %}
  </div>
</div>

<div class="section">
  <div class="section__container">
    {% include components/project-content.html
      title = "Documenting the design system"
      body = "
        <p>Once the first iteration of the design system was created, the next challenge was making it accessible to the wider team and presenting it across the organisation for adoption at scale. After the design phase, I created comprehensive documentation on Confluence, detailing how to use the library and outlining accessibility and usability best practices for each component and pattern.</p>
        <p>We also developed a digital guidelines document to share the design system with external stakeholders. Check out the document for a preview of these guidelines.</p>
      "
    %}
    {% include components/project-pdf.html 
      file_name = "guidelines"
    %}
  </div>
</div>
