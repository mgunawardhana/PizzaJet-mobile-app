import React from "react";
import * as WebBrowser from "expo-web-browser";

/**
 * `useWarmUpBrowser` is a custom React hook that warms up the browser when the component mounts and cools it down when the component unmounts.
 * This is done using the `warmUpAsync` and `coolDownAsync` methods from the `expo-web-browser` package.
 *
 * @example
 * // To use this hook in a component:
 * // import { useWarmUpBrowser } from './useWarmUpBrowser';
 * // ...
 * // useWarmUpBrowser();
 *
 * @returns {void}
 */
export const useWarmUpBrowser = () => {
  /**
   * The `useEffect` hook is used to perform side effects in function components.
   * In this case, it is used to warm up the browser when the component mounts and cool it down when the component unmounts.
   * The empty array `[]` as the second argument to `useEffect` means that the effect will only run once (on mount and unmount), and not on every re-render.
   */
  React.useEffect(() => {
    /**
     * `warmUpAsync` is a method from the `expo-web-browser` package that warms up the browser to make the first navigation faster.
     * The `void` keyword is used to explicitly discard the promise returned by `warmUpAsync`, as we don't need to wait for it to resolve.
     */
    void WebBrowser.warmUpAsync();

    /**
     * The function returned by the effect is the cleanup function, which is run when the component is unmounted.
     * Here, it is used to cool down the browser using the `coolDownAsync` method from the `expo-web-browser` package.
     */
    return () => {
      /**
       * `coolDownAsync` is a method from the `expo-web-browser` package that cools down the browser, releasing the resources used by `warmUpAsync`.
       * The `void` keyword is used to explicitly discard the promise returned by `coolDownAsync`, as we don't need to wait for it to resolve.
       */
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
