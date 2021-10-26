import { createBlackImage } from "../../ImageFactory/createBlackImage";
import { templateMatching } from "..";

describe("Black color", () => {
    it("can create a simple image", ()=> {
        const imageArray = [
            [0, 1, 2],
            [3, 4, 5],
        ];

        const image = createBlackImage(imageArray);

        const kernelArray = [[1], [4]];

        const kernelImage = createBlackImage(kernelArray);

        const [xPeak, yPeak, matching] = templateMatching(kernelImage, image)

        const numberColors = 3;
        const sumAbsoluteDifferentes = [
            (1-0)*numberColors + (4-3)*numberColors,
            0,
            (2-1)*numberColors + (5-4)*numberColors,
        ];

        expect(xPeak).toBe(0)
        expect(yPeak).toBe(1)

        expect(matching[0][0]).toBe(sumAbsoluteDifferentes[0])
        expect(matching[0][1]).toBe(sumAbsoluteDifferentes[1])
        expect(matching[0][2]).toBe(sumAbsoluteDifferentes[2])
    })
})