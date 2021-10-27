import PixelColor from "../../Color";
import Image from "../../Image";

const createBlackImage = (array: number[][]) => {
    const height = array.length;
    const width = array[0].length;
    
    const image = new Image(height, width);
    for(var i=0; i<height; i++){
      for(var j=0; j<width; j++){         
        const color = new PixelColor(array[i][j], array[i][j], array[i][j])
        image.setPixel(i, j, color);
      }      
    }
    return image;
}

export {createBlackImage};