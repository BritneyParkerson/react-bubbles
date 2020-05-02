import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../Authorization';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
    useEffect (() => {
      fetchColors();
    }, [])

    const fetchColors = () => {
      axiosWithAuth()
        .get('/colors')
        .then(res => {
          setColorList(res.data)
          console.log(res.data)})
    }
     

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
  };

export default BubblePage; 
