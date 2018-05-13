# eslint-config-mmontes11-node

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/eslint-config-mmontes11-react.png)](https://nodei.co/npm/eslint-config-mmontes11-react)

Eslint config for ReactJS by Martín Montes. It extends [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier](https://github.com/prettier/prettier).

### Install

```bash
npm i --save eslint-config-mmontes11-react
```

### Usage

Create an `.eslintrc`:
```
{
  "extends": ["mmontes11-react"]
}
```

### Prettier

You can redefine prettier default rules by creating a `.prettierrc`:
```
{
  "printWidth": 120,
  "trailingComma": "all"
}
```
