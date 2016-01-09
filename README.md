# dom-builder

[![Build Status](https://travis-ci.org/wrumsby/dom-builder.svg)](https://travis-ci.org/wrumsby/dom-builder)

A function to help build DOM trees.

## Installation

```bash
bower install dom-builder --save
```

You can use the [resolve-bower-module](https://www.npmjs.com/package/babel-plugin-resolve-bower-module) Babel plugin to resolve modules that are imported with Bower.

## Usage

```js
import dom from 'dom-builder';

const el = dom('div', null,
  dom('img.profile', { src: 'avatar.png' }),
  dom('h3', null, [user.firstName, user.lastName].join(' '))
);
```

You can also use the [transform-react-jsx](http://babeljs.io/docs/plugins/transform-react-jsx/) Babel plugin to use dom-builder with JSX syntax by specifiying a `pragma` when configuring the plugin, e.g.

```json
{
  "plugins": [
    ["transform-react-jsx", { "pragma": "dom" }]
  ]
}
```

With that configuration the code sample below will produce the same output as the code sample above.


```js
import dom from 'dom-builder';

const el = <div>
  <img className="profile" src="avatar.png" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>;
```
