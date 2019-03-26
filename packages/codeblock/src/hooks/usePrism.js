import React from 'react';
import loadModule from '../utils/loadModule';
import getLanguages from '../utils/getLanguages';

const importPrism = () =>
    import(/* webpackChunkName: 'codeblock/prismjs' */ 'prismjs');

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
 */
export default function usePrism(ref, options) {
    React.useEffect(() => {
        try {
            if (ref.current) {
                applyPrism(ref.current, options);
            }
        } catch (error) {
            console.warn('[codeblock] usePrism failed', { error });
        }
    }, [ref.current, ...Object.values(options)]);
}

/**
 * Async function that loads and applies prism.
 *
 * @param {Object} element The target DOM element
 * @param {Object} options Options object
 * @param {String} [options.language] Name of the prism language to load
 * @param {String} [options.theme] Name of the prism theme to load
 * @param {Boolean} [options.isContainer] Whether to treat the element as a container
 * @param {Boolean} [options.async] Whether to use a web worker for parsing the code
 * @param {Function} [options.callback] Optional callback invoked after the highlighting is done
 */
export async function applyPrism(element, options) {
    //
    const { language, theme, isContainer, async, callback } = options;

    const stillMounted = () => !!element;

    const Prism = await importPrism();

    if (isContainer && stillMounted()) {
        const detected = getLanguages(element);
        let lang;
        for (lang of detected) {
            if (lang && stillMounted()) {
                await loadModule('language', lang);
            }
        }
    } else if (language && stillMounted()) {
        await loadModule('language', language);
    }

    if (theme && stillMounted()) {
        await loadModule('theme', theme);
    }

    if (stillMounted()) {
        isContainer
            ? Prism.highlightAllUnder(element, async, callback)
            : Prism.highlightElement(element, async, callback);
    }
}
