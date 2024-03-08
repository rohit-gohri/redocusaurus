import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import type { OpenAPISpec } from 'redoc/typings/types';
import { SpecProps, SpecPropsWithUrl } from '../types/common';

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
export default function useSpecData(providedSpec: SpecProps): SpecPropsWithUrl {
  const allData = useAllPluginInstancesData('docusaurus-plugin-redoc');
  if (providedSpec.spec) {
    // return provided spec when already defined
    return providedSpec as SpecPropsWithUrl;
  } else {
    // retrieve spec from docusaurus conf
    const id = providedSpec.id;
    const apiData = id
      ? allData?.[id as string]
      : Object.values(allData ?? {})?.[0];
    return apiData as SpecPropsWithUrl;
  }
}
