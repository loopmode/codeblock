import themeLoaders from '../theme';
import syntaxLoaders from '../syntax';

const loaders = {
    theme: themeLoaders,
    syntax: syntaxLoaders
};

export default async function loadModule(type, name) {
    const load = loaders[type] && loaders[type][name];

    if (typeof load === 'function') {
        try {
            console.log('loadModule', { type, name, load });
            await load();
            console.log('>> loadModule done', { type, name, load });
        } catch (error) {
            console.error(`Error loading ${type} "${name}"`, error);
        }
    } else {
        console.warn(`Unsupported ${type} "${name}"`, {
            supported: Object.keys(loaders[type])
        });
    }
}
