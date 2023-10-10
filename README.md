# @beetl/eslint-config

[![npm](https://img.shields.io/npm/v/@beetl/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@beetl/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue out-of-the-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @beetl/eslint-config
# or
yarn add -D eslint @beetl/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@beetl"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Releasing

```
pnpm run release
```

## Check Also

- [BeetlUK/eslint-config](https://github.com/BeetlUK/eslint-config) - Our ESLint config

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [BeetlUK](https://github.com/BeetlUK)

## Attribution

Big thank you to Antfu for his eslint config that this pulls heavily from.
