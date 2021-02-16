export class ResourceDataUtils {
    private readonly keysByResource: any;

    constructor(keyBindings: any) {
        this.keysByResource = keyBindings
    }

    getNestedResource(resource: string) {
        const resourceDecomposition = resource.split("/");
        return resourceDecomposition[resourceDecomposition.length - 1] || resource;
    }

    getRessourceIdName(resource: string) {
        let nested = this.getNestedResource(resource);
        console.log("Ressource recherchée : " + resource); // "compte-service/1234/biens"
        console.log("Ressource imbriquée : " + nested); // "biens"
        return nested in this.keysByResource ? this.keysByResource[nested] : null;
    }
}
