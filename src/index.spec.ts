import {ResourceDataUtils} from "./resourceDataUtils";

describe("Data REST Client", () => {
    describe("_getRessourceParam", () => {
        let resourceDataUtils: ResourceDataUtils;

        beforeEach(() => {
            const keyBindings = {
                "post": "idPost"
            }
            resourceDataUtils = new ResourceDataUtils(keyBindings)
        })

        it("should return correct id for root resource specified", () => {
            const expected = "idPost"

            const actual = resourceDataUtils.getRessourceIdName("post")

            expect(actual).toEqual(expected);
        })

        it("should return id for root resource NOT specified", () => {
            const expected = null

            const actual = resourceDataUtils.getRessourceIdName("comment")

            expect(actual).toEqual(expected);
        })
        it("should return correct id for root nested resource specified", () => {
            const expected = "idPost"

            const actual = resourceDataUtils.getRessourceIdName("comment/123/post")

            expect(actual).toEqual(expected);
        })
    })
});
