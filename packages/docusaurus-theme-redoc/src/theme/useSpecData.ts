import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import type { SpecProps } from '../types/common';

/**
 *
 * @param id ID of plugin data
 * @returns Spec Data of ID or first one if ID is not provided
 */
export function useSpecData(id?: string, spec?: SpecProps['spec']): SpecProps {
  const allData = useAllPluginInstancesData('docusaurus-plugin-redoc');
  if (spec) {
    // return provided spec when already defined
    return {
      spec,
    };
  }
  const apiData = id
    ? allData?.[id as string]
    : Object.values(allData ?? {})?.[0];

  return apiData as SpecProps;
}

export default useSpecData;
