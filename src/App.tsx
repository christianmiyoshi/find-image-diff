import React, { useContext } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Image from './components/Image';
import {ImageContext} from './contexts/ImageContextProvider'

export default function App() {
  const {setImage1, setImage2} = useContext(ImageContext);
  return (
    <div className="App">
        <Image setImage={setImage1}></Image>
        <Image setImage={setImage2}></Image>
    </div>
  );
}
