# NasLint

[![npm](https://img.shields.io/npm/v/naslint.svg?style=popout-square)](https://www.npmjs.com/package/naslint)
[![Travis (.org)](https://img.shields.io/travis/NasaTeam/naslint.svg?style=popout-square)](https://travis-ci.org/NasaTeam/naslint)

> Linter for smart contracts on Nebulas blockchain.

![screenshot](https://user-images.githubusercontent.com/1231359/46247345-88fa7f80-c43c-11e8-94e6-2cd8a3723a2e.png)

## How to use

#### Precondition

Node.js 10+ and npm 6+.

#### Install globally

Run this command to install as a global command:

```sh
$ npm i -g naslint
```

Then, we can use this command `naslint` anywhere:

```sh
$ naslint my-contract.js
```

It will lint specified contract file, and output a report.

#### Install locally

Run this command in your project's folder to install as a local development dependency:

```sh
$ npm i -D naslint
```

Then, add a script in your `package.json` file, like this:

```json
{
  "scripts": {
    "lint": "naslint ./my-contract.js"
  }
}
```

Thereafter, your can run this script to lint specified contract file:

```sh
$ npm run lint
```

## Rules

NasLint validates contract code with these built-in rules.

| Rule name         | Functionality                                | Doc |
| ----------------- | -------------------------------------------- | :---: |
| `export-contract` | Ensure an export is a smart contract object. | [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/export-contract.md) |
| `export`          | Ensure an export is present.                 |     [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/export.md)      |
| `limited-libs`    | Report unsupported third-party library.      |  [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/limited-libs.md)   |
| `no-esm`          | Report ESM import calls and export.          |     [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/no-esm.md)      |
| `no-undef`        | Report undefined variables.                  |                           [[<sup>↗</sup>]](https://eslint.org/docs/rules/no-undef)                            |

## FAQ

#### Does NasLint validate contract written in TypeScript?

Sure. NasLint can handle contract code in both JavaScript and TypeScript.

#### Does NasLint conflict with ESLint? What if I use ESLint simultaneously in my project?

No conflict. These two works completely independently.

Just use ESLint as usual. You can config ESLint in the way your like, these configuration for ESLint will never interference NasLint.

## Community

#### WeChat group

Add group master `cssmagic`, who will invite you in.

#### Contributors <a name="contributors">&nbsp;</a>

|   Name    | Contribution <sup>[\*]</sup> | Remark   |
| :-------: | ------------------- | ------ |
| @newraina | 🤔 💻 🚇 🔌 ⚠️ 📖  | Founder |
| @cssmagic | 🤔 🌍 📖            |

> <sup>[\*]</sup> These legends follow the [emoji-key](https://github.com/kentcdodds/all-contributors#emoji-key) of "all-contributors" specification. Contributions of any kind are welcome!

---

## Thanks

NasLint is based on these open source projects:

- [ESLint](https://eslint.org/)
- [standard-engine](https://github.com/standard/standard-engine)

## License

MIT
