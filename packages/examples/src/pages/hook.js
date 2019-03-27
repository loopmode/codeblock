import raw from 'raw.macro';
import React from 'react';

import Markdown from '@loopmode/markdown';
import Codeblock from '@loopmode/codeblock';

export default function UsePrismHookPage() {
    return (
        <div>
            <Markdown>{raw('./hook.md')}</Markdown>
            <Codeblock
                src="https://raw.githubusercontent.com/loopmode/markdown/master/packages/markdown/src/Markdown.js"
                language="jsx"
                prependSrc
            />
        </div>
    );
}
