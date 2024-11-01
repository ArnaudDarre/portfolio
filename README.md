# Arnaud Darré's online portfolio

Online portfolio presenting my work, skills & training.

## Run and deploy

### Run the website locally

- Install [Jekyll](https://jekyllrb.com/). Jekyll is a Ruby Gem that can be installed on most systems ([Installation manual](https://jekyllrb.com/docs/installation/)).

- Run the website in development mode

```shell
bundle exec jekyll serve
```

> Local URL: [localhost:4000](http://localhost:4000)

### Deployment

We use git flow for versioning and version tagging. On branch develop:

- Pull the latest changes

```shell
git pull | git pull origin main
```

- Initiate your feature

```shell
git flow feature start my-feature
```

- This will automatically create a new branch to work on your feature
- Once the feature/update is done, close the feature

```shell
git flow feature finish my-feature
```

- push the changes to the remote `develop` branch, to test on the staging environment

```shell
git push
```

- Once the tests have passed, publish the release (adding the version tag at the end)

```shell
git flow release start 1.0.0
git flow release finish 1.0.0
```

- push the changes

```shell
git push | git push origin develop | git push --tags
```

Deployment is automated with Netlify. The production and staging environments are deployed automatically when the corresponding branches are pushed.

| Environment | Branch | URL |
| --- | --- | --- |
| Staging | develop | |
| Production | production | [arnaud-darre.com](https://arnaud-darre.com/) |

## Dependencies & Methodologies

### SASS

Styling is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
Style files are located in the assets/_sass folder. You don't need to run any additional command to compile, it does it automatically with `jekyll serve` ([installation manual](https://sass-lang.com/install)).

## Plugins

### Jekyll Inline SVG

SVG optimizer and inliner for jekyll ([documentation](https://github.com/sdumetz/jekyll-inline-svg)).

### Compress

A Jekyll layout that compresses HTML ([documentation](http://jch.penibelst.de/)).
