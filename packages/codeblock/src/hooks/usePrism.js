import React from 'react';
import applyPrism from '../utils/applyPrism';

/**
 * Highlights code in the target element using prismjs.
 * Loads prismjs itself, the specified theme and the specified or auto-detected languages.
 *
 * If the element is not the actual target but a container of possible targets (e.g. you render a markdown file, that may contain any codeblocks),
 * use the `{isContainer: true}` option to automatically detect languages and run  `Prism.highlightAllUnder` instead of `Prism.highlightElement`.
 *
 * If you need to display large amounts of code, set the `{async: true}` option to use a worker for parsing.
 *
 * Check out the [prism documentation](https://prismjs.com/extending.html#api) for more details on the `async` and `callback` options.
 *
 * @param {Object} element The target DOM element
 * @param {Object} options the options object
 * @param {String} [options.language] name of the prism language to load
 * @param {String} [options.theme] name of the prism theme to load
 * @param {Boolean} [options.isContainer] whether `element` is a container of targets
 * @param {Boolean} [options.async] whether to use a web worker for parsing
 * @param {Function} [options.callback] Optional invoked after the highlighting is done
 *
 */
export default function usePrism(ref, options) {
    React.useEffect(() => {
        try {
            if (ref.current) {
                console.log('usePrism', { ref, options });
                applyPrism(ref.current, options);
            }
        } catch (error) {
            console.warn('[codeblock] usePrism failed', { error });
        }
    }, [ref.current, ...Object.values(options)]);
}
