import React,{useState} from "react";

const ImageContext = React.createContext(
  {
    setImage1: (image: [number, number, number][][])=>{},
    setImage2: (image: [number, number, number][][])=>{}
  }
  );

const ImageContextProvider = (props:any) => {
    const [image1, setImage1] = useState<[number, number, number][][]>([]);
    const [image2, setImage2] = useState<[number, number, number][][]>([]);
  
    return (
      <ImageContext.Provider value={{setImage1, setImage2}}>
        {props.children}
      </ImageContext.Provider>
    );
  };

  export {ImageContext, ImageContextProvider};