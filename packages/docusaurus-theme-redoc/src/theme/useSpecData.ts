import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import { SpecProps } from '../types/common';

/**
 *
 * @param id ID of plugin data
 * @returns Spec Data of ID or first one if ID is not provided
 */
export function useSpecData(id?: string): SpecProps {
  const allData = useAllPluginInstancesData('docusaurus-plugin-redoc');
  const apiData = id
    ? allData?.[id as string]
    : Object.values(allData ?? {})?.[0];

  return apiData as SpecProps;
}

export default useSpecData;
