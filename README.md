# NasLint

> Linter for smart contracts on Nebulas blockchain.
> 
> 星云链智能合约代码检查工具。

## 安装与使用

#### 前提

你的电脑需要安装 Node.js 10+ 和 npm 6+。

#### 全局安装

在任何地方运行以下命令，即可安装为全局命令：

```sh
$ npm i -g naslint
```

然后就可以在任何地方使用 `naslint` 全局命令：

```sh
$ naslint my-contract.js
```

此时会对指定的合约文件进行检查，并给出检查报告。

#### 局部安装

在项目的根目录运行以下命令，即可安装为当前项目的开发依赖：

```sh
$ npm i -D naslint
```

然后可在 `package.json` 文件中添加以下脚本：

```json
{
  "scripts": {
    "lint": "naslint ./my-contract.js"
  }
}
```

此后运行以下命令可对指定的合约文件进行检查：

```sh
$ npm run lint
```

## 规则

规则名 | 功能 | 文档
---|---|:---:
`export-contract` | Ensure an export is a smart contract object. | [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/export-contract.md)
`export` | Ensure an export is present. | [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/export.md)
`limited-libs` | Report unsupported third-party library. | [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/limited-libs.md)
`no-esm` | Report ESM import calls and export. | [[<sup>↗</sup>]](https://github.com/NasaTeam/eslint-plugin-nebulas/blob/master/docs/rules/no-esm.md)
`no-undef` | Report undefined variables. |  [[<sup>↗</sup>]](https://eslint.org/docs/rules/no-undef)


## 常见问题

#### NasLint 可以检查我用 TypeScript 编写的合约文件吗？

目前不能。

#### NasLint 与 ESLint 冲突吗？我在项目中还想使用 ESLint 怎么办？

不冲突。这两者完全独立，可以同时使用。

像往常一样使用 ESLint 即可，你可以在项目根目录下设置 `eslintrc.js` 文件，给 ESLint 用。这个文件并不会干扰到 NasLint。

## 社区

#### 微信群

有任何关于 NasLint 的疑问，欢迎加群讨论！请加群主微信号 `cssmagic`，群主会拉你入群。

#### 贡献者 <a name="contributors">&nbsp;</a>

姓名 | 贡献 <sup>[*]</sup> | 备注
:---:|---|---
@newraina | 🤔 💻 🚇 🔌 📖 | 创始人
@cssmagic | 🤔 📖 | 

> <sup>[*]</sup> These legends follow the [emoji-key](https://github.com/kentcdodds/all-contributors#emoji-key) of "all-contributors" specification. Contributions of any kind are welcome!

***

## Thanks

NasLint is based on these open source projects:

* [ESLint](https://eslint.org/)
* [standard-engine](https://github.com/standard/standard-engine)

## License

MIT
