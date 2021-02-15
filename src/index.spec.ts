import {_getRessourceParam} from ".";

describe("Data REST Client", () => {
    describe("_getRessourceParam", () => {
        it("should return correct id for root resource specified", () => {
            const keyBindings = {
                "post": "idPost"
            }
            const expected = "idPost"

            const actual = _getRessourceParam("post", keyBindings)

            expect(actual).toEqual(expected);
        })

        it("should return id for root resource NOT specified", () => {
            const keyBindings = {
                "post": "idPost"
            }
            const expected = null

            const actual = _getRessourceParam("comment", keyBindings)

            expect(actual).toEqual(expected);
        })
        it("should return correct id for root nested resource specified", () => {
            const keyBindings = {
                "post": "idPost"
            }
            const expected = "idPost"

            const actual = _getRessourceParam("comment/123/post", keyBindings)

            expect(actual).toEqual(expected);
        })
    })
});
