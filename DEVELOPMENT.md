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

### Useful Commands

#### Add packages

```sh
 lerna add <pkg> [package-globs..]
```

Use this instead of `npm i --save <pkg>`

#### Clean

```sh
lerna clean
```

Use this to remove all `node_modules` folders from all lerna managed packages.
