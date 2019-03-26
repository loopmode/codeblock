const childSelector = '[class*="language-"], [class*="lang-"]';
const languageMatcher = /lang(uage)*-([a-z0-9\-]*)/;

import languages from '../languages';

const supportedLanguages = Object.keys(languages);

/**
 * Detects prism languages found as CSS classes on the children of a given element.
 *
 * Queries all child elements that have a `language-*` CSS class and returns
 * an array of the unique language names (the `*` values) that were found.
 *
 * @param {Element} element a DOM element
 * @return {Array} an array of languages found inside `element`
 */
export default function getLanguages(element) {
    if (!element) {
        return [];
    }
    const elements = element.querySelectorAll(childSelector);

    console.debug('getLanguages', { element, elements });

    return [...elements].reduce((result, el) => {
        const matches = el.className.match(languageMatcher);
        const language = matches && matches[2];
        if (
            supportedLanguages.includes(language) &&
            !result.includes(language)
        ) {
            console.debug('getLanguages >> detected:', language);

            result.push(language);
        }
        return result;
    }, []);
}
