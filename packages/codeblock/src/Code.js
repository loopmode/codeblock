import React from 'react';
import Codeblock from './Codeblock';

export default function Code(props) {
    return <Codeblock {...props} as="code" />;
}
