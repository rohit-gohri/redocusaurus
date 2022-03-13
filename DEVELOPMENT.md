# Development

This repository is structured as a [monorepo](https://blog.npmjs.org/post/186494959890/monorepos-and-npm) and is using [Yarn Workspaces](https://yarnpkg.com/features/workspaces) to manage the monorepo. That means each package is published independently on npm.

## Setup

1. Install all dependencies:

   ```sh
   yarn
   ```

1. Build the projects

   ```sh
   yarn build && yarn build:website
   ```

1. Run build for all packages in Dev (Watch) Mode

   ```sh
   yarn dev
   ```

   In separate terminal, run for the website:

   ```sh
   yarn dev:website
   ```

## Releasing

Releases, versioning and Changelogs are handled by [changesets](./.changeset/README.md).

Whenever you fix something or add a feature or open a PR, add a changeset file by running `yarn changeset` and answer the prompts.

When these are merged to `main` branch, the changeset/action in [`version` workflow](./.github/workflow/version.yml) will open a new PR with all the changes related to releasing done.

Merge that PR **with a merge commit** and version number as the commit message and create a Github Release with the version number as the tag, and it will trigger the [release workflow](./.github/workflow/release.yml) that will publish these to npm.

## Useful Links

- Yarn Workspaces: <https://yarnpkg.com/features/workspaces>
- Typescript Docs: <https://www.typescriptlang.org/docs/home.html>
- Reference Monorepo: <https://github.com/typescript-eslint/typescript-eslint/tree/v3.1.0>
- Docusaurus Docs for Creating Plugins : <https://docusaurus.io/docs/using-plugins#creating-plugins>

