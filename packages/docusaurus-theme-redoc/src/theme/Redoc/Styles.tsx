import React, { useMemo, useRef, useEffect } from 'react';
import '../../global';
import type { RedocRawOptions } from 'redoc';

/**
 * Don't hydrate/replace server styles
 * @see https://github.com/preactjs/preact/issues/2364#issuecomment-966707086
 */
export function ServerStyles(_props: {
  specProps: SpecProps;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
}) {
  const isFirstRun = useRef(true);
  useEffect(() => {
    // initialize once
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }
  }, []);

  const styles = useMemo(() => {
    if (!isFirstRun) {
      return '';
    }
    return document.getElementsByClassName('redocusaurus-styles')[0].innerHTML;
  }, []);

  return (
    <div
      className="redocusaurus-styles"
      dangerouslySetInnerHTML={{ __html: styles }}
    ></div>
  );
}
