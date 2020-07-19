import React from 'react';
import Perfect from "../../images/100.png";
import Metricas from "../../icons/metricas.svg";

export default function Features(props) {

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 text-center">
        <p> Titulo</p>
        <p>Subtitulo</p>
      </div>

      <img className="flex-1 mx-auto" src={Metricas} alt="Metricas"/>
    </div>
  );
}