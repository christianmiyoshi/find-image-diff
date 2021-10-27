import { createImageFromUint8ClampedArray } from "..";
import PixelColor from "../../../PixelColor";

describe("Simple image", () => {
    it("can create a simple image", ()=> {
        const height = 2;
        const width = 3;

        const colors = new Uint8ClampedArray(height*width*3);
        for(var i=0; i<height*width*3; i++){
            colors[i] = i;
        }
        
        const image = createImageFromUint8ClampedArray(width, height, colors);

        expect(image.getPixel(0, 0)).toEqual(new PixelColor(0, 1, 2));
        expect(image.getPixel(0, 1)).toEqual(new PixelColor(3, 4, 5));
        expect(image.getPixel(0, 2)).toEqual(new PixelColor(6, 7, 8));

        expect(image.getPixel(1, 0)).toEqual(new PixelColor(9, 10, 11));
        expect(image.getPixel(1, 1)).toEqual(new PixelColor(12, 13, 14));
        expect(image.getPixel(1, 2)).toEqual(new PixelColor(15, 16, 17));
    })
})