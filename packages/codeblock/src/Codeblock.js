import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useContent from '@loopmode/use-content';

import languages from './languages';
import themes from './themes';
import usePrism from './hooks/usePrism';

import * as extras from './utils/contentExtras';

const CustomTypes = {
    language: PropTypes.oneOf(Object.keys(languages)),
    theme: PropTypes.oneOf(Object.keys(themes)),
    stringy: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.array
    ])
};

Codeblock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    //
    theme: CustomTypes.theme,
    language: CustomTypes.language,
    as: PropTypes.string,
    loader: PropTypes.func,
    src: PropTypes.string,
    callback: PropTypes.func,
    async: PropTypes.bool,
    isContainer: PropTypes.bool,
    redact: PropTypes.func,
    prepend: CustomTypes.stringy,
    append: CustomTypes.stringy
};

Codeblock.defaultProps = {
    language: 'javascript',
    as: 'pre',
    theme: 'prism',
    loader: undefined,
    src: undefined,
    callback: undefined,
    async: false,
    isContainer: false,
    redact: undefined,
    prepend: undefined,
    append: undefined
};

Codeblock.extras = extras;

export default function Codeblock(props) {
    const Renderer = props.as;
    const elementRef = React.useRef(null);
    const content = useContent(props.children, props);

    usePrism(elementRef, props);

    return (
        <Renderer
            {...getForeignProps(props)}
            ref={elementRef}
            className={cx(
                'Codeblock',
                props.className,
                getLanguageClass(props)
            )}
        >
            {content}
        </Renderer>
    );
}

function getLanguageClass(props) {
    if (props.language && !props.isContainer) {
        return `language-${props.language}`;
    }
}

function getForeignProps(props) {
    const ownKeys = Object.keys(Codeblock.defaultProps);
    return Object.entries(props).reduce((result, [key, value]) => {
        if (ownKeys.includes(key)) {
            return result;
        }
        return Object.assign(result, { [key]: value });
    }, {});
}
