import { useMemo, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useColorMode } from '@docusaurus/theme-common';
import '../global';
import { AppStore, RedocRawOptions } from 'redoc';
import { SpecProps } from '../types/common';
import { useSpecOptions } from './useSpecOptions';

// the current store singleton in the app's instance
let currentStore: AppStore | null = null;

/**
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2023 Rohit Gohri
 * Released under the MIT License
 */
export function useSpec(
  { spec, url, themeId }: SpecProps,
  optionsOverrides?: RedocRawOptions,
) {
  const specOptions = useSpecOptions(themeId, optionsOverrides);
  const fullUrl = useBaseUrl(url, { absolute: true });
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === 'dark';

  const result = useMemo(() => {
    if (currentStore !== null && isBrowser) {
      currentStore.dispose();
    }
    currentStore = new AppStore(spec, fullUrl, specOptions.options);

    return {
      ...specOptions,
      // @ts-expect-error extra prop
      hasLogo: !!spec.info?.['x-logo'],
      store: currentStore,
    };
  }, [isBrowser, spec, fullUrl, specOptions]);

  useEffect(() => {
    // to ensure that menu is properly loaded when theme gets changed
    // or when first load
    result.store.onDidMount();
  }, [result, isBrowser, isDarkTheme]);

  return result;
}
