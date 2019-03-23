import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import syntaxLoaders from './syntax';
import themeLoaders from './theme';

import useLanguage from './hooks/useLanguage';
import useTheme from './hooks/useTheme';
import usePrism from './hooks/usePrism';
import useExternalContent from './hooks/useExternalContent';

Codeblock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loader: PropTypes.func,
    syntax: PropTypes.oneOf(Object.keys(syntaxLoaders)),
    theme: PropTypes.oneOf(Object.keys(themeLoaders)),
    component: PropTypes.string,
    innerComponent: PropTypes.string,
    src: PropTypes.string
};

export default function Codeblock({
    children,
    className,
    src,
    loader,
    language = 'javascript',
    theme = 'okaidia',
    component: Outer = 'pre',
    innerComponent: Inner = 'code',
    ...props
}) {
    const ref = React.useRef(null);

    let content = children;
    if (src) {
        content = useExternalContent(src, loader);
    }
    useLanguage(language);
    useTheme(theme);
    usePrism(ref);

    return (
        <Outer
            {...props}
            ref={ref}
            className={cx(
                'Codeblock',
                { [`language-${language}`]: language },
                className
            )}
        >
            <Inner children={content} />
        </Outer>
    );
}
