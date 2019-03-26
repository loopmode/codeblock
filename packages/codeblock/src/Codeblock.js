import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import languages from './languages';
import themes from './themes';
import usePrism from './hooks/usePrism';
import useExternal from './hooks/useExternalContent';
import defaultExternal from './utils/fetchExternal';

const Container = styled.div`
    &[class*='language-'] {
        &.inline {
            display: inline;
            padding: 2px 3px;
            margin-right: 5px;
        }
    }
`;

Codeblock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loadExternal: PropTypes.func,
    language: PropTypes.oneOf(Object.keys(languages)),
    theme: PropTypes.oneOf(Object.keys(themes)),
    component: PropTypes.string,
    src: PropTypes.string,
    callback: PropTypes.func,
    async: PropTypes.bool,
    inline: PropTypes.bool,
    isContainer: PropTypes.bool
};

export default function Codeblock({
    children,
    className,
    src,
    loadExternal = defaultExternal,
    language = 'javascript',
    theme = 'okaidia',
    component = 'pre',
    isContainer,
    callback,
    async,
    inline,
    ...props
}) {
    const ref = React.useRef(null);

    usePrism(ref, {
        language,
        theme,
        callback,
        async,
        isContainer
    });

    let content = children;
    if (src) {
        content = useExternal(src, loadExternal);
    }

    return (
        <Container
            {...props}
            ref={ref}
            as={component}
            className={cx(
                'Codeblock',
                className,
                { inline },
                {
                    [`language-${language}`]: language
                }
            )}
        >
            {content}
        </Container>
    );
}
