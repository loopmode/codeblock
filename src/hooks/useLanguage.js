import React from 'react';
import loadModule from '../utils/loadModule';

export default function useLanguage(value) {
    return React.useEffect(() => {
        loadModule('syntax', value);
    }, [value]);
}
