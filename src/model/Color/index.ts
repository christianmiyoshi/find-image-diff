export default class PixelColor {
    private _red: number;
    private _blue: number;
    private _green: number;

    constructor(red: number = 0, blue: number = 0, green: number = 0)
    {
        this.validRedColor(red);
        this.validBlueColor(blue);
        this.validGreenColor(green);

        this._red=red;
        this._blue=blue;
        this._green=green;
    }

    private validGreenColor(green: number) {
        if (green < 0 || green > 255){
            throw new Error("Invalid green value");
        }            
    }

    private validBlueColor(blue: number) {
        if (blue < 0 || blue > 255){
            throw new Error("Invalid blue value");
        }            
    }

    private validRedColor(red: number) {
        if (red < 0 || red > 255){
            throw new Error("Invalid red value");
        }
    }

    public set pixelColor(color: PixelColor){
        this.red = color.red;
        this.blue = color.blue;
        this.green = color.green;
    }

    public get red(){
        return this._red;
    }

    public get blue(){
        return this._blue;
    }

    public get green(){
        return this._green;
    }

    public set red(red: number){
        this.validRedColor(red);
        this._red = red;
    }

    public set blue(blue: number){
        this.validBlueColor(blue);
        this._blue = blue;
    }

    public set green(green: number){
        this.validGreenColor(green);
        this._green = green;
    }

    public isEqual(color: PixelColor){
        return this.red === color.red 
            && this.blue === color.blue 
            && this.green === color.green;
    }

    public toString(){
        return `(${this.red}, ${this.green}, ${this.blue})`
    }
}

