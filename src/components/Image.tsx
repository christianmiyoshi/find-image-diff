import React, { useState, useCallback, useRef, useEffect, useContext} from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {ImageContext} from '../contexts/ImageContextProvider';

interface PropsType{
  setImage: (image: [number, number, number][][]) => void
}

export default function Image({setImage}:PropsType) {
  const [upImg, setUpImg] = useState<string>("");
  const imgRef = useRef<HTMLImageElement|null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [crop, setCrop] = useState<Partial<Crop>>({ unit: "%", width: 30, aspect: 16 / 9});
  const [completedCrop, setCompletedCrop] = useState<Crop|null>(null);

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result as string));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const setGlobalImage = (canvas: HTMLCanvasElement|null, crop:Crop|null) => {
    if (!crop || !canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    const image = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    const data = image?.data;
  
    if(!data) {
      throw new Error();
    }
  
    const imageArray: [number, number, number][][] = [];
  
    for(var i=0; i<canvas.height; i++){
      const rowArray: [number, number, number][] = [];
      for(var j=0; j<canvas.width; j++){
        const index = (i*canvas.width+j)*3;
        rowArray.push([data[index], data[index+1],data[index+2]]);
      }
      imageArray.push(rowArray);
    }

    setImage(imageArray);
  }  

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    if(!ctx){
      throw new Error();
    }

    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  return (
    <div className="App">
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c: Crop) => setCrop(c)}
        onComplete={(c: Crop) => setCompletedCrop(c)}
      />
      <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0)
          }}
        />
      </div>
      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={() =>
          setGlobalImage(previewCanvasRef.current, completedCrop)
        }
      >
        Save
      </button>
    </div>
  );
}
