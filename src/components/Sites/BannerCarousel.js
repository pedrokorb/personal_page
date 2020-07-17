import React from 'react';
import Slider from "react-slick";
import BannerSites from "./BannerSites";
import {
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa"


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CAC from "../../images/cacmock.png"; 
import DelFuego from "../../images/delfuegomock.png";

const phone = '5551999529914'
const target = 'Construir minha casa'
const message = `Olá, vi seu anúncio no site e gostaria de mais informações sobre ${target}.`

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaAngleRight
      className={className}
      style={
        {
          ...style,
          display: "block",
          color: "white",
          width: '60px',
          height: '60px',
          marginRight: '25px',
          zIndex: 99,
          textShadow: '2px 2px 4px #000000'
        }
      }      
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaAngleLeft
      className={className}
      style={
        { 
          ...style, 
          display: "block", 
          color: "white", 
          width: '60px', 
          height: '60px',
          marginLeft: '25px',
          zIndex: 99,
          textShadow: '2px 2px 4px #000000'
        }
      }
      onClick={onClick}
    />
  );
}

export default function BannerCarousel(props) {
  let items = [
    { 
      title: "Carniceria del Fuego",
      link: "https://carniceriadelfuego.com.br",
      image: DelFuego 
    },
    {
      title: "C.A.C. Da Silva Construções",
      link: "https://cacconstrucoes.com",
      image: CAC
    },
  ];

  let settings = {
    dots: false,
    arrows: items.length > 1 ? true : false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {items.map(item => (
        <div key={item.title}>
          <BannerSites
            title={item.title}
            link={item.link}
            image={item.image}
          />
        </div>  
      ))}
    </Slider>
  );
}