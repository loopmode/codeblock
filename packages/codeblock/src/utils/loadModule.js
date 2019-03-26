import themes from '../themes';
import languages from '../languages';

const loaders = {
    theme: themes,
    language: languages
};

/**
 * Loads a prismjs theme or language module.
 *
 * @param {String} type either `theme` or `language`
 * @param {String} name the name of the theme or language to load
 */
export default async function loadModule(type, name) {
    const loader = loaders[type] && loaders[type][name];

    if (typeof loader === 'function') {
        try {
            await loader();
        } catch (error) {
            console.warn(`[codeblock] loadModule failed`, type, name);
        }
    } else {
        console.warn(`[codeblock] Unsupported ${type} "${name}"`, {
            supported: Object.keys(loaders[type])
        });
    }
}
