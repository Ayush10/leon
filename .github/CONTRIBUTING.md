# Contributing

Thanks a lot for your interest in contributing to tridev! :heart:

**tridev needs open source to live**, the more modules he has, the more skillful he becomes.

**Before submitting your contribution**, please take a moment to review this document.

Please note we have a [code of conduct](https://github.com/Ayush10/tridev/blob/develop/.github/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## How You Can Help

Here are few examples about how you could help on tridev, by:

- [Creating a new module](https://docs.gettridev.ai/packages-modules).
- [Working on new features](http://roadmap.gettridev.ai) (what is in backlog or todo).
- [Suggesting new ideas](https://github.com/Ayush10/tridev/issues/new/choose).
- [Reporting a bug](https://github.com/Ayush10/tridev/issues/new?labels=bug&template=BUG.md).
- [Improving the documentation](https://github.com/Ayush10/docs.gettridev.ai) (translations, typos, better writing, etc.).
- [Sponsoring tridev](http://sponsor.gettridev.ai).


## Pull Requests

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

- **Please first discuss** the change you wish to make via [issue](https://github.com/Ayush10/tridev/issues),
  email, or any other method with the owners of this repository before making a change.
  It might avoid a waste of your time.

- The `master` branch is actually used as a snapshot of the latest stable release. **Do not submit your PRs
  against the `master` branch**.

- Ensure your code **respect our coding standards** (cf. [.eslintrc.json](https://github.com/Ayush10/tridev/blob/develop/.eslintrc.json)).
To do so, you can run:

  ```sh
  npm run lint
  ```
  
- Make sure your **code passes the tests**. You can run the tests via the following command:
  
  ```sh
  npm test
  ```
  
  If you're adding new features to tridev, please include tests.

## Development Setup

Choose the setup method you want to go for.

### Single-Click

Gitpod will automatically setup an environment and run an instance for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Ayush10/tridev)

### Basic

```sh
# Clone the repository
git clone https://github.com/Ayush10/tridev.git tridev

# Go to the project root
cd tridev

# Install
npm install

# Check the setup went well
npm run check

# Run the development server
npm run dev:server

# Run the development web app
npm run dev:app
```

### Docker

```sh
# Clone the repository
git clone https://github.com/Ayush10/tridev.git tridev

# Go to the project root
cd tridev

# Build
npm run docker:build

# Run the development server and the development web app
npm run docker:dev
```

## Versioning

- We use [Semantic Versioning](https://semver.org) for releases.
- A new tridev module creation increases the MINOR version number of its relevant tridev package.
- Each time a MAJOR or MINOR version number of a tridev package is increased, then the MINOR version number of the project should also be increased.
- Each time a PATCH version number of a tridev package is increased, then the PATCH version number of the projet should also be increased.

## Commits

The commit message guideline is adapted from the [AngularJS Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

### Types

Types define which kind of changes you made to the project.

| Types         | Description |
| ------------- |-------------|
| BREAKING      | Changes including breaking changes. |
| build         | New build version. |
| chore         | Changes to the build process or auxiliary tools such as changelog generation. No production code change. |
| ci            | Changes related to continuous integration only (GitHub Actions, CircleCI, etc.). |
| docs          | Documentation only changes. |
| feat          | A new feature. |
| fix           | A bug fix. |
| perf          | A code change that improves performance. |
| refactor      | A code change that neither fixes a bug nor adds a feature. |
| style         | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.). |
| test          | Adding missing or correcting existing tests. |

### Scopes

Scopes define high-level nodes of tridev.

- web app
- server
- hotword
- package/package_name

### Examples

```sh
git commit -m "feat(server): awesome new server feature"
git commit -m "docs(package/tridev): fix spelling"
git commit -m "chore: split training script into awesome blocks"
git commit -m "style(web app): remove chatbot useless parentheses"
```

## Sponsor

You can also contribute by [sponsoring tridev](http://sponsor.gettridev.ai).

Please note that I dedicate most of my free time to tridev.

By sponsoring the project you make the project sustainable and faster to develop features.

The focus is not only limited to the activity you see on GitHub but also a lot of thinking about the direction of the project. Which is naturally related to the overall design, architecture, vision, learning process and so on...

## Spread the Word

Use [#tridevAI](https://twitter.com/hashtag/tridevAI) if you tweet about tridev and/or mention [@Ayushtiti_fr](https://twitter.com/Ayushtiti_fr).
