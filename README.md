# jest-node-path-bug

jest does not work correctly with `import.meta.resolve` in ESM context.

1. Run `index.mjs` with this command:

```sh
node --experimental-vm-modules index.mjs
```
Node.js with this flag works correctly.

2. Run `index.spec.mjs` with this command:

```sh
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

Throw this error:

```text
TypeError: (intermediate value).resolve is not a function
```
