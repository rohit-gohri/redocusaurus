# Development

This repository is structured as a [monorepo](https://blog.npmjs.org/post/186494959890/monorepos-and-npm). That means each package is published independently on npm.

## Links

- Lerna Docs: <https://github.com/lerna/lerna>
- Typescript Docs: <https://www.typescriptlang.org/docs/home.html>
- Reference Monorepo: <https://github.com/typescript-eslint/typescript-eslint/tree/v3.1.0>

### Tutorials

- <https://medium.com/codespace69/lerna-js-a-tool-for-managing-javascript-projects-with-multiple-packages-2cb447f9eebb>

## Setup

1. Install NodeJS >= 10.x:

   ```sh
   # On macOS
   brew install node
   ```

1. Install `lerna` cli:

   ```sh
   npm i -g lerna
   ```

1. Install all dependencies:

   ```sh
   yarn
   ```

1. Build the projects

   ```sh
   yarn build && yarn build:example
   ```

1. Run in Dev (Watch) Mode

   ```sh
   yarn dev
   ```

### Useful Commands

#### Add package to workspace

```sh
 yarn add <pkg> -W
```

Otherwise just go in each pacakge folder and use yarn normally.

## Releasing

Releases, versioning and Changelogs are handled by [changesets](./.changeset/README.md).

Whenever you fix something or add a feature or open a PR, add a changeset file by running `yarn changeset` and answer the prompts.

When these are merged to `main` branch, the changeset/action in [`version` workflow](./.github/workflow/version.yml) will open a new PR with all the changes related to releasing done.

Merge that PR **with a merge commit** and version number as the commit message and create a Github Release with the version number as the tag, and it will trigger the [release workflow](./.github/workflow/release.yml) that will publish these to npm.
