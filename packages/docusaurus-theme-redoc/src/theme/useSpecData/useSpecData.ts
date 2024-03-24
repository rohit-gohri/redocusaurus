import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import type { OpenAPISpec } from 'redoc/typings/types';
import { SpecDataResult } from '../../types/common';

export type ParsedSpec = OpenAPISpec;

/**
 * Retrive the spec data to give to Redoc
 * if providedSpec.spec is provided, use it
 * otherwise use Spec Data using docusaurus config
 *    using providedSpec.id (or first one if not provided)
 *
 * @param providedSpec spec data
 * @returns Spec Data of ID or first one if ID is not provided
 */
export function useSpecData(
  id?: string,
  spec?: OpenAPISpec,
  themeId?: string,
): SpecDataResult {
  const allData = useAllPluginInstancesData('docusaurus-plugin-redoc');
  if (spec) {
    // return provided spec when already defined
    return {
      spec,
      themeId,
    };
  } else {
    // retrieve spec from docusaurus conf
    const apiData = id
      ? allData?.[id as string]
      : Object.values(allData ?? {})?.[0];
    return apiData as SpecDataResult;
  }
}
