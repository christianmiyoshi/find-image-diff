import { createBlackImage } from "..";
import PixelColor from "../../../PixelColor";

describe("Black color", () => {
    it("can create a simple image", ()=> {
        const imageArray = [
            [0, 1, 2],
            [3, 4, 5],
        ];

        const image = createBlackImage(imageArray);
        
        expect(image.getPixel(0, 0)).toEqual(new PixelColor(0, 0, 0));
        expect(image.getPixel(0, 1)).toEqual(new PixelColor(1, 1, 1));
        expect(image.getPixel(0, 2)).toEqual(new PixelColor(2, 2, 2));

        expect(image.getPixel(1, 0)).toEqual(new PixelColor(3, 3, 3));
        expect(image.getPixel(1, 1)).toEqual(new PixelColor(4, 4, 4));
        expect(image.getPixel(1, 2)).toEqual(new PixelColor(5, 5, 5));
    })
})