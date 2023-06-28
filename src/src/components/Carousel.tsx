import React, { ReactElement } from "react";
import { useCallback, useState } from "react";
import "./Carousel.css";
import foto from './../img/FOTO-25.jpg';
import { Image } from './Image';

interface CarouselProp {
  images: ReactElement[];
}

export const Carousel: React.FC<CarouselProp> = ({ images }) => {

    const rows = [];
for (let i = 0; i < images.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
        <div className="item">
        {images[i]}
        </div>
    );
}

  return (
    <div className="container">
      <div className="carousel">
       {rows}
      </div>
    </div>
  );
};
