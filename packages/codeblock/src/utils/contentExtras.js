export const src = function addSrc(props) {
    return `// src: ${props.src}`;
};

export const language = function addLanguage(props) {
    return `// language: ${props.language}`;
};

export const theme = function addTheme(props) {
    return `// theme: ${props.theme}`;
};

export const report = function addReport(props) {
    return `/*\n${JSON.stringify(props, replacer, 4)}\n*/`;
    function replacer(name, value) {
        if (typeof value === 'function') {
            return `function ${value.name}() { ... }`;
        } else {
            return value;
        }
    }
};
