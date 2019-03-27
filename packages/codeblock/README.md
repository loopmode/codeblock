# @loopmode/codeblock

A react component for code highlighting - based on [prismjs](https://prismjs.com) and prepared for code-splitting.

- _Note: Requires react version 16.8.0 or newer (hooks)_
- _Note: Requires support for dynamic `import()` statements (e.g. create-react-app/webpack/parcel)_

## Installation

```bash
yarn add @loopmode/codeblock
# or
npm install --save @loopmode/codeblock
```

## Usage

The default prism theme is `okaidia`, the default language is `javascript`.
Use the `theme` and `language` props to override.

Currently, you have to decide on a single theme because the global prism stylesheets interfere with each other.
See [local themed component](#local-themed-component) for how to specify a theme.

### Displaying inline content

You can use the component much like you would use the `<pre>` tag. Pass the contents as regular react children.

```jsx
import React from 'react';
import Codeblock from '@loopmode/codeblock'

export default function InlineContent() {
    return (
        <Codeblock>{`class Foo { /* Yay! Code! */ }`}</Codeblock>
    );
}
```

### Loading external content

If you specify `src`, the content will be loaded from that URL and the `children` prop is ignored.

```jsx
import React from 'react';
import Codeblock from '@loopmode/codeblock'

export default function ExternalContent() {
    return (
        <Codeblock
            children="Nope. Ignored."
            src="https://raw.githubusercontent.com/loopmode/codeblock/master/packages/codeblock/src/Codeblock.js"
        />
    );
}
```

If you need to support older browsers, make sure to provide a `fetch` polyfill, or provide a custom `loadExternal` function that does not depend on `fetch` (e.g using axios, superagent etc).

### Local themed component

Currently, each prism theme stylesheet is loaded globally. When you load a second theme, the first one is still loaded and the styles interfere. For this reason, you should decide for one theme and stick with it.

While you could just set the `theme` prop manually over and over, you should create a local component that sets the `theme` prop once and import that one across your codebase.

Example `components/Codeblock`:

```jsx
import React from 'react';
import Codeblock from '@loopmode/codeblock'

export default function ThemedCodeblock(props) {
    return (
        <Codeblock {...props} theme="twilight" />
    );
}
```


## Code splitting

All default prismjs themes and [languages](https://prismjs.com/#supported-languages) are supported and loaded with dynamic `import()` statements that use `/* webpackChunkName */` comments.
When you build your app for production, your final bundle will contain an additional codeblock folder with the theme and language files (`codeblock/theme.*.js` and `codeblock/language.*.js`).

However, only the required ones will be loaded at runtime.
