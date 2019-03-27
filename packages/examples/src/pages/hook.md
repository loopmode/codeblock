# The `usePrism` hook

The next example is the actual code of the [@loopmode/markdown](https://www.npmjs.com/package/@loopmode/markdown) package.

It uses the `usePrism` hook instead of the `<Codeblock />` component to apply highlighting to any
code blocks in rendered markdown, using the `isContainer` flag.

Basically, the hook expects the `ref` of a DOM
element as first argument, and an options object - otherwise the
props of the `<Codeblock />` component - as the second argument.

The hook then applies highlighting to any children of the given
element, if they match the `'[class*="language-"], [class*="lang-"]'` selector.
