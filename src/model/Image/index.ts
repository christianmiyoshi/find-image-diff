import PixelColor from "../Color";

class Image 
{
    private _image: PixelColor[][];
    
    constructor(height: number, width: number)
    {
        this._image = [];

        for(var i=0; i<height; i++){
            const row: PixelColor[] = [];
            for(var j=0; j<width; j++){
                row.push(new PixelColor());
            }
            this._image.push(row);
        }
    }

    public get height(){
        return this._image.length;
    }
    public get width(){
        if(this.height === 0){
            return 0;
        }
        return this._image[0].length;
    }

    public isSameSize(image: Image){
        return this.height === image.height && this.width === image.width;
    }

    public setPixel(x: number, y:number, color: PixelColor)
    {
        this._image[x][y] = color;
    }

    public getPixel(x: number, y:number)
    {
        return this._image[x][y];
    }
}

export default Image;