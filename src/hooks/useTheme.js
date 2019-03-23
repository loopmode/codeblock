import React from 'react';
import loadModule from '../utils/loadModule';

export default function useTheme(value) {
    return React.useEffect(() => {
        loadModule('theme', value);
    }, [value]);
}
