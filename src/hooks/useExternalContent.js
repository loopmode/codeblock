import React from 'react';
import loadExternal from '../utils/loadExternal';

export default function useExternalContent(url, loader = loadExternal) {
    const [content, setContent] = React.useState('');
    React.useEffect(() => {
        if (url) {
            return loader(url, setContent);
        }
    }, [url]);
    return content;
}
