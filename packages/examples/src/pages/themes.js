import React from 'react';

import Codeblock from '@loopmode/codeblock';
import themes from '@loopmode/codeblock/lib/themes';

const themeNames = Object.keys(themes);

export default function ThemesPage() {
    const [theme, setTheme] = React.useState();
    return (
        <div>
            <h1>Themes</h1>
            <select onChange={event => setTheme(event.target.value)}>
                <option />
                {themeNames.map(theme => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </select>
            <section>
                <h2>{theme}</h2>
                <Codeblock
                    theme={theme}
                    src="https://raw.githubusercontent.com/loopmode/codeblock/master/packages/codeblock/src/Code.js"
                />
            </section>
        </div>
    );
}
