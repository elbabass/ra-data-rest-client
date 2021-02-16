import { DataProvider, fetchUtils } from "ra-core";
export declare class ResourceDataUtils {
    private readonly keysByResource;
    constructor(keyBindings: any);
    getNestedResource(resource: string): string;
    getRessourceIdName(resource: string): any;
}
declare const _default: (apiUrl: string, keysByResource?: any, responseTransformsByResource?: any, httpClient?: (url: any, options?: fetchUtils.Options | undefined) => Promise<{
    status: number;
    headers: Headers;
    body: string;
    json: any;
}>, countHeader?: string) => DataProvider;
export default _default;
