import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` in the browser, `useEffect` during the static build.
 *
 * React warns when `useLayoutEffect` runs on the server because its effect
 * can't be encoded into the rendered HTML. For components that measure the DOM
 * (and therefore render nothing meaningful until they do), falling back to
 * `useEffect` server-side is equivalent and silences the warning.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
