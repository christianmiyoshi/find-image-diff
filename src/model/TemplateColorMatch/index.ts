import Image from "../Image";

const templateMatching = (kernel: Image, image: Image) => {
    const result: number[][] = [];

    for(let i=0; i<=image.height - kernel.height; i++){
        const row: number[] = [];
        for(let j=0; j<=image.width - kernel.width; j++){
            row.push(0);
        }
        result.push(row)
    }


    let min =Number.MAX_SAFE_INTEGER;
    let xPeak = -1;
    let yPeak = -1;
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result[0].length; j++){
            for(let m=0; m<kernel.height; m++){
                for(let n=0; n<kernel.width; n++){
                    result[i][j] += Math.abs(kernel.getPixel(m, n).red - image.getPixel(i+m, j+n).red)
                    result[i][j] += Math.abs(kernel.getPixel(m, n).blue - image.getPixel(i+m, j+n).blue)
                    result[i][j] += Math.abs(kernel.getPixel(m, n).green - image.getPixel(i+m, j+n).green)
                }
            }

            if(result[i][j] < min){
                min = result[i][j];
                xPeak = i;
                yPeak = j;
            }
        }
    }

    const date: [number, number, number[][]] = [xPeak, yPeak, result]

    return date;
}

export {templateMatching};