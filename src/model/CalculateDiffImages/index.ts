import Image from "../Image";
import PixelColor from "../PixelColor";

const calculateDiffImages = (imageA: Image, imageB: Image, parameters: {diffColor: PixelColor, defaultColor: PixelColor, threshold: number}) => {
    if(!imageA.isSameSize(imageB)){
        throw new Error('It is not possible to calculate diff of images with different sizes');
    }

    const result: Image = new Image(imageA.height, imageA.width);

    for(let i=0; i<result.height; i++){
        for(let j=0; j<result.width; j++){
            const pixelA = imageA.getPixel(i, j);
            const pixelB = imageB.getPixel(i, j);

            let color = parameters.defaultColor;
            if(pixelA.absoluteDiff(pixelB) > parameters.threshold){
                color = parameters.diffColor;
            }

            result.setPixel(i, j, color);
        }
    }
    
    return result;
}

export {calculateDiffImages};