/**
 * Loads the contents of an external resource as a string using window.fetch.
 *
 * @param {String} url the URL of a resource to load
 * @param {Function} callback function with a `(error, result)` signature
 * @return {Function} a function that aborts the request
 */
export default function loadExternal(url, callback) {
    const { fetch, AbortController } = window;
    const controller = new AbortController();
    fetch(url, {
        method: 'get',
        signal: controller.signal
    })
        .then(response => response.text())
        .then(text => callback(null, text))
        .catch(error => callback(error, null));

    return () => controller.abort();
}
