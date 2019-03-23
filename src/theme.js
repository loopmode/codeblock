export default {
    coy: () => import(/* webpackChunkName: 'prism.theme.coy' */ 'prismjs/themes/prism-coy.css'),
    dark: () => import(/* webpackChunkName: 'prism.theme.dark' */ 'prismjs/themes/prism-dark.css'),
    funky: () => import(/* webpackChunkName: 'prism.theme.funky' */ 'prismjs/themes/prism-funky.css'),
    okaidia: () => import(/* webpackChunkName: 'prism.theme.okaidia' */ 'prismjs/themes/prism-okaidia.css'),
    solarizedlight: () =>
        import(/* webpackChunkName: 'prism.theme.solarizedlight' */ 'prismjs/themes/prism-solarizedlight.css'),
    tomorrow: () => import(/* webpackChunkName: 'prism.theme.tomorrow' */ 'prismjs/themes/prism-tomorrow.css'),
    twilight: () => import(/* webpackChunkName: 'prism.theme.twilight' */ 'prismjs/themes/prism-twilight.css'),
    prism: () => import(/* webpackChunkName: 'prism.theme.prism' */ 'prismjs/themes/prism.css')
};
