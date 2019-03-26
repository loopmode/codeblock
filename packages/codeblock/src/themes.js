export default {
    coy: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-coy' */ 'prismjs/themes/prism-coy.css');
    },
    dark: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-dark' */ 'prismjs/themes/prism-dark.css');
    },
    funky: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-funky' */ 'prismjs/themes/prism-funky.css');
    },
    okaidia: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-okaidia' */ 'prismjs/themes/prism-okaidia.css');
    },
    solarizedlight: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-solarizedlight' */ 'prismjs/themes/prism-solarizedlight.css');
    },
    tomorrow: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-tomorrow' */ 'prismjs/themes/prism-tomorrow.css');
    },
    twilight: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism-twilight' */ 'prismjs/themes/prism-twilight.css');
    },
    prism: () => {
        return import(/* webpackChunkName: 'codeblock/theme.prism' */ 'prismjs/themes/prism.css');
    }
};
