import { useMemo, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useColorMode } from '@docusaurus/theme-common';
import useSpecData from '@theme/useSpecData';
import useSpecOptions from '@theme/useSpecOptions';
import '../../global';
import { AppStore, RedocRawOptions } from 'redoc';

// the current store singleton in the app's instance
let currentStore: AppStore | null = null;

/**
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
export function useSpec(
  specInfo: SpecProps,
  optionsOverrides?: RedocRawOptions,
): SpecResult {
  const { spec, downloadSpecUrl, themeId } = useSpecData(
    specInfo.id,
    specInfo.spec,
    specInfo.themeId,
  );
  const specOptions = useSpecOptions(themeId, optionsOverrides);
  // build download URL by using downloadSpecUrl, fallback to useSpecData result
  const fullDownloadSpecUrl = useBaseUrl(
    specInfo.downloadSpecUrl || downloadSpecUrl,
    { absolute: true },
  );
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === 'dark';

  const result = useMemo(() => {
    if (currentStore !== null && isBrowser) {
      currentStore.dispose();
    }
    currentStore = new AppStore(spec, fullDownloadSpecUrl, specOptions.options);

    return {
      ...specOptions,
      // @ts-expect-error extra prop
      hasLogo: !!spec.info?.['x-logo'],
      store: currentStore,
      spec,
    };
  }, [isBrowser, spec, fullDownloadSpecUrl, specOptions]);

  useEffect(() => {
    // to ensure that menu is properly loaded when theme gets changed
    // or when first load
    result.store.onDidMount();
  }, [result, isBrowser, isDarkTheme]);

  return result;
}
