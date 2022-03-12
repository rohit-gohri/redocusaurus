import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import { Spec } from '../types/common';

/**
 *
 * @param id ID of plugin data
 * @returns Spec Data of ID or first one if ID is not provided
 */
export function useApiData(id?: string) {
  const allData = useAllPluginInstancesData<Spec>('docusaurus-plugin-redoc');
  const apiData = allData[id as string] || Object.values(allData)[0];

  return apiData;
}

export default useApiData;
