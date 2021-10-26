import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Image from './Image';

export default function App() {
  
  return (
    <div className="App">
      <Image></Image>
      <Image></Image>
    </div>
  );
}
