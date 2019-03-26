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

    console.debug('loadModule', { type, name, loader });

    if (typeof loader === 'function') {
        try {
            await loader();
        } catch (error) {
            console.error(
                `[loadModule] error loading ${type} "${name}"`,
                error
            );
        }
    } else {
        console.warn(`Unsupported ${type} "${name}"`, {
            supported: Object.keys(loaders[type])
        });
    }
}
