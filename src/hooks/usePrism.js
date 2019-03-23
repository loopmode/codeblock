import React from 'react';

/**
 * Applies prism highlighting to a given element
 * @param {Element} ref the target DOM element
 */
export default function usePrism(ref) {
    const applyPrism = async () => {
        const Prism = await import(/* webpackChunkName: 'prism' */ 'prismjs');
        if (ref && ref.current) {
            Prism.highlightElement(ref.current);
        }
    };
    React.useEffect(() => {
        try {
            applyPrism();
        } catch (error) {
            console.warn('[usePrism] failed', { error });
        }
    }, [ref]);
}
