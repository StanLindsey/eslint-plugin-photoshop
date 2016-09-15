# eslint-plugin-photoshop

Adds photoshop environment to eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-photoshop`:

```
$ npm install eslint-plugin-photoshop --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-photoshop` globally.

## Usage

Add `photoshop` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "env": {
        "photoshop/photoshop": true
    },
    "plugins": [
        "photoshop"
    ]
}
```





