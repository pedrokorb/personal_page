import React from 'react';
import Button from "../Button/button";

export default function BannerSites(props) {

  return (
    <div 
      className="flex flex-col-reverse mb-8 md:flex-row items-center justify-center text-center"
      style={{ 
        background: 'linear - gradient(45deg, #060c21, #0d0139)',
        color: '#fff'
      }}
    >
      <div className="flex-1">
        <h3 style={{ fontWeight: 400 }} className="text-white mb-8">{props.title}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button cta="Acessar"/>
        </a>
      </div>
      <img className="flex-1 mb-8 lg:mr-20" src={props.image} alt={props.title} style={{ width: '100%', maxWidth: '600px' }} />
    </div>
  );
}