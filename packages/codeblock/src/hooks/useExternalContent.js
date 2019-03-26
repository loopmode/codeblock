import React from 'react';

export default function useExternalContent(url, loadExternal) {
    const [content, setContent] = React.useState('');

    React.useEffect(
        () =>
            loadExternal(url, (error, result) => {
                if (!error) {
                    setContent(result);
                } else if (error.name !== 'AbortError') {
                    console.warn('request failed', url);
                }
            }),
        [url]
    );

    return content;
}
