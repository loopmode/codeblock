import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import languages from './languages';
import themes from './themes';
import usePrism from './hooks/usePrism';
import useContent from './hooks/useContent';
import fetchExternal from './utils/fetchExternal';

Codeblock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loadExternal: PropTypes.func,
    language: PropTypes.oneOf(Object.keys(languages)),
    theme: PropTypes.oneOf(Object.keys(themes)),
    as: PropTypes.string,
    src: PropTypes.string,
    callback: PropTypes.func,
    async: PropTypes.bool,
    isContainer: PropTypes.bool
};

Codeblock.defaultProps = {
    as: 'pre',
    language: 'javascript',
    theme: 'okaidia',
    loadExternal: fetchExternal
};

export default function Codeblock(props) {
    const {
        as: Renderer,
        language,
        theme,
        src,
        isContainer,
        loadExternal,
        callback,
        children,
        async,
        ...otherProps
    } = props;

    const element = React.useRef(null);

    const content = useContent(children, src, loadExternal);

    const className = cx(
        'Codeblock',
        { [`language-${language}`]: language && !isContainer },
        props.className
    );

    usePrism(element, {
        language,
        theme,
        callback,
        async,
        isContainer
    });

    return (
        <Renderer {...otherProps} ref={element} className={className}>
            {content}
        </Renderer>
    );
}
