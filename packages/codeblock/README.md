# @loopmode/codeblock

A react component for code highlighting - based on [prismjs](https://prismjs.com)

## Motivation

This is a simple wrapper around `prismjs`. Some of its main goals:

- Make it easy to display code with syntax highlighting in react projects
- Support all themes and languages provided by `prismjs`, but without bloating the final bundle with unused ones
- Support for URL-based content, e.g. display code directly from github without manual loading

## Installation

```bash
yarn add @loopmode/codeblock
# or
npm install --save @loopmode/codeblock
```

## Prerequisites

- You need react v16.8.0 or newer - we're using hooks under he hood
- You need support for dynamic `import()` syntax - we only load what's needed from `prismjs`, dynamically

If you want to use the URL-based loader via `src` prop in older browsers, you should either provide a `window.fetch` polyfill or your own `loadExternal` function that doesn't require `window.fetch`.

_Note: In case your project is based on a recent version of `create-react-app`, you're good to go!_


## Usage

```jsx
import React from 'react';
import Codeblock from '@loopmode/codeblock'

export default function CodeblockExamples() {
    return (
        <Codeblock>{`
            class Foo {
                constructor(value) {
                    this.value = value;
                }
            }
            const a = new Foo('a');
            const b = new Foo('b');
        `}</Codeblock>
    );
}
```

### Some more examples

```jsx
import React from 'react';
import Codeblock, { Code } from '@loopmode/codeblock'

export const Examples = () => (
    <>
        {/* load external content via src prop */}
        <Codeblock src="http://my-website.com/my-file.js" />

        {/* specify language and/or theme props */}
        <Codeblock language="python" theme="twilight">
            {'import base64, sys; base64.decode(open(sys.argv[1], "rb"), open(sys.argv[2], "wb"))'}
        </Codeblock>

        {/* inline styling */}
        <p>We can use inline code: <Codeblock inline>const foo = 'foo'</Codeblock><p>
        <p>Alternatively, use the Code component: <Code>const foo = 'foo'</Code><p>
    </>
)
```
