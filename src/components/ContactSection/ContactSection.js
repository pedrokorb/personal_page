import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import Contato from "../../images/contatoreduzido.png";


export default function ContactSection(props) {
  const [query, setQuery] = useState('');
  const phone = "5555996737066";

  const handleChange = (event) => {
    setQuery(event.target.value)
  } 
  
  return (
    <div
      className="flex"
      style={
        {
          backgroundImage: `url(${Contato})`, 
          backgroundRepeat: 'no-repeat',
          height: '434px',
        }}
      >
      <div className="self-end flex">
        <input 
          className="py-2 mb-2 ml-8 rounded-full text-black" 
          placeholder="Digite uma mensagem"
          style={{ width: '230px' }} 
          type="text" 
          id="message" 
          name="message"
          onChange={handleChange}
        />
        <a 
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${query}`} 
          className="ml-1 mb-2 p-2 bg-green-500 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdSend className="ml-1 w-8 h-8" />
        </a>
      </div>
      <div className="ml-10 text-right">
        
      </div>
    </div>
  );
}