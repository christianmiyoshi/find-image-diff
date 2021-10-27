import PixelColor from "../../PixelColor";
import Image from "../../Image";

const createImageFromUint8ClampedArray = (width: number, height: number, data: Uint8ClampedArray) => {
    const image = new Image(height, width);
    for(var i=0; i<height; i++){
      for(var j=0; j<width; j++){
        const index = (i*width+j)*3;
        const color = new PixelColor(data[index], data[index+1], data[index+2])
        image.setPixel(i, j, color);
      }      
    }
    return image;
}

export {createImageFromUint8ClampedArray};