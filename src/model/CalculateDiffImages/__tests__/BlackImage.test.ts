import { calculateDiffImages } from "..";
import { createBlackImage } from "../../ImageFactory/createBlackImage";
import PixelColor from "../../PixelColor";

describe("Black color", () => {
    it("can calculate diff", ()=> {
        const imageArrayA = [
            [0, 1],
            [3, 4],
        ];

        const imageArrayB = [
            [0, 2],
            [30, 40],
        ];

        const imageA = createBlackImage(imageArrayA);
        const imageB = createBlackImage(imageArrayB);        
        
        const white = new PixelColor(254, 254, 254)
        const black = new PixelColor(1, 1, 1)
        const parameters = {
            diffColor: black,
            defaultColor: white,
            threshold: 3
        }
        const diff = calculateDiffImages(imageA, imageB, parameters);

        expect(diff.getPixel(0, 0)).toEqual(white);
        expect(diff.getPixel(0, 1)).toEqual(white);
        expect(diff.getPixel(1, 0)).toEqual(black);
        expect(diff.getPixel(1, 1)).toEqual(black);

    })
})