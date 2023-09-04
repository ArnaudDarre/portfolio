# Arnaud Darré's online portfolio

Online portfolio presenting my projects, skills & training.

## Run and deploy

### Run the website locally

- Install [Jekyll](https://jekyllrb.com/)

Jekyll is a Ruby Gem that can be installed on most systems.
[installation manual](https://jekyllrb.com/docs/installation/)

- Run the website in development mode

```
jekyll serve
```

> Local URL: [localhost:4000](http://localhost:4000)

### Deployment

On branch develop

```
git checkout main &&
  git pull origin develop &&
  git push &&
  git checkout develop
```

Deployment is automated with Netlify. The production environment is deployed automatically when the branch `main` is pushed.

| Environment | Branch | URL |
| --- | --- | --- |
| Staging | develop | |
| Production | main | [arnaud-darre.com](https://arnaud-darre.com/) |

## Dependencies & Methodologies

### SASS

Styling is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
Style files are located in the assets/_sass folder. You don't need to run any additional command to compile, it does it automatically with `jekyll serve`

- [Install Sass](https://sass-lang.com/install)

## Plugins

### Jekyll Inline SVG

SVG optimizer and inliner for jekyll.

[Documentation](https://github.com/sdumetz/jekyll-inline-svg)

### Compress

A Jekyll layout that compresses HTML.

[Documentation](http://jch.penibelst.de/)
