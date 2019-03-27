import React from 'react';

import Codeblock from '@loopmode/codeblock';
import themes from '@loopmode/codeblock/lib/themes';

export default function ThemesPage() {
    const theme = window.location.hash.replace('#', '') || 'prism';
    return (
        <div>
            <h1>Themes</h1>
            <section>
                <p>
                    Note that if you use more than one theme at once, the loaded
                    stylesheets will interfere with each other. You should
                    decide on a theme and stick with it.
                </p>
                <p>
                    To make this example work, we set the desired theme name
                    into <code>window.location.hash</code> and reload the page
                    entirely.
                </p>
            </section>
            <section>
                <ThemePicker theme={theme} />
                <h2>Theme: "{theme}"</h2>
                <Codeblock
                    theme={theme}
                    src="https://raw.githubusercontent.com/loopmode/codeblock/master/packages/codeblock/src/Code.js"
                />
            </section>
        </div>
    );
}

function ThemePicker({ theme }) {
    return (
        <select
            value={theme}
            onChange={event => {
                window.location.hash = event.target.value;
                window.location.reload();
            }}
        >
            {Object.keys(themes).map(theme => (
                <option key={theme} value={theme}>
                    {theme}
                </option>
            ))}
        </select>
    );
}
