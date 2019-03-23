const { AbortController } = window;

/**
 * Loads the text contents of an external resource and invokes a callback with the result.
 * @param {String} url the URL of a resource to load
 * @param {*} successCallback a callback function to invoke in case of success. Receives the result text.
 * @param {*} errorCallback a callback function to invoke in case of error. Receives the error object.
 */
export default async function loadExternal(
    url,
    successCallback,
    errorCallback
) {
    const controller = new AbortController();

    try {
        const response = await window.fetch(url, {
            method: 'get',
            signal: controller.signal
        });

        successCallback(await response.text());
    } catch (error) {
        console.warn('[loadExternal] failed', { err });
        errorCallback(err);
    }

    return () => controller.abort();
}
