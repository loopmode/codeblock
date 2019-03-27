import React from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'react-remarkable';
import usePrism from '@loopmode/codeblock/lib/hooks/usePrism';

import css from './Markdown.scss';
import cx from 'classnames';

const Markdown = ({ className, theme = 'prism', ...props }) => {
    const ref = React.useRef(null);

    usePrism(ref, { theme, isContainer: true });

    return (
        <div className={cx('Markdown', css.Markdown, className)} ref={ref}>
            <Remarkable {...props} />
        </div>
    );
};

Markdown.propTypes = {
    className: PropTypes.string
};

export default Markdown;
