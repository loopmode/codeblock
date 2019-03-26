import loadModule from './loadModule';
import getLanguages from './getLanguages';

const importPrism = () =>
    import(/* webpackChunkName: 'codeblock/prismjs' */ 'prismjs');

/**
 * Async function that loads and applies prism. See `hooks/usePrism`.
 */

export default async function applyPrism(element, options) {
    //
    const { language, theme, isContainer, async, callback } = options;

    const isMounted = () => !!element;
    const Prism = await importPrism();

    if (isMounted() && theme) {
        console.debug('[applyPrism] load theme', theme);
        await loadModule('theme', theme);
    }

    if (isMounted() && language) {
        console.debug('[applyPrism] load language', language);
        await loadModule('language', language);
    }

    if (isMounted() && isContainer) {
        const detectedLanguages = getLanguages(element);
        console.debug('applyPrism', { detectedLanguages });
        for (const lang of detectedLanguages) {
            if (isMounted() && lang) {
                await loadModule('language', lang);
            }
        }
    }

    if (isMounted()) {
        isContainer
            ? Prism.highlightAllUnder(element, async, callback)
            : Prism.highlightElement(element, async, callback);
    }
}
