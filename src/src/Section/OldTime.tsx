import React from "react";
import { Carousel } from "../components/Carousel";
import { Image } from "../components/Image";
import foto1 from "./../img/01.jpg";
import foto2 from "./../img/02.jpg";
import foto3 from "./../img/03.jpeg";
import foto4 from "./../img/04.jpeg";
import foto5 from "./../img/05.jpeg";
import foto6 from "./../img/06.jpeg";
import foto7 from "./../img/07.jpeg";
import foto8 from "./../img/08.jpeg";
import foto9 from "./../img/09.jpeg";

import foto10 from "./../img/10.jpeg";
import foto11 from "./../img/11.jpeg";
import foto12 from "./../img/12.jpeg";
import foto13 from "./../img/13.jpeg";
import foto14 from "./../img/14.jpeg";

import foto15 from "./../img/15.jpeg";
import foto16 from "./../img/16.jpeg";
import foto17 from "./../img/17.jpeg";
import foto18 from "./../img/18.jpeg";

import "./OldTime.css";

export const OldTime: React.FC = () => {
  return (
    <div className="oldTime">
      <div className="time-item">
        <div className="title">30.7.2015 - Den kdy jsme se poznali</div>
        <Carousel
          images={[<Image src={foto1}></Image>, <Image src={foto2}></Image>]}
        />
      </div>
      <div className="vl"> </div>
      <p className="title">27.8.2015 - Náš první DBF fest</p>
      <Carousel
        images={[
          <Image src={foto3}></Image>,
          <Image src={foto4}></Image>,
          <Image src={foto5}></Image>,
        ]}
      />

      <div className="vl"> </div>
      <p className="title">Hodne jsme toho spolu propili</p>
      <Carousel
        images={[
          <Image src={foto6}></Image>,
          <Image src={foto7}></Image>,
          <Image src={foto8}></Image>,
          <Image src={foto9}></Image>,
        ]}
      />

<div className="vl"> </div>
      <p className="title">7.7.2016 - Poprve jsem spolu leteli letadle a myslim ze jsme si to uzili</p>
      <Carousel
        images={[
          <Image src={foto10}></Image>,
          <Image src={foto11}></Image>,
          <Image src={foto12}></Image>,
          <Image src={foto13}></Image>,
          <Image src={foto14}></Image>,
        ]}
      />

<div className="vl"> </div>
      <p className="title">26.7.2016 - Odkoji jsme sve prvni mlade</p>
      <Carousel
        images={[
          <Image src={foto15}></Image>,
          <Image src={foto16}></Image>,
          <Image src={foto17}></Image>,
          <Image src={foto18}></Image>
        ]}
      />

    </div>
  );
};
