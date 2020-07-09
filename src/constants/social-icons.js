import React from "react"
import { 
    FaLinkedinIn, 
    FaGithub,
    FaWhatsapp,
  } from "react-icons/fa"

const phone = "5555996737066"
const message = "Olá, vi seu anúncio no seu site e gostaria de mais informações sobre fazer meu site personalizado."

export default [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/pedrokorb/",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/pedrokorb",
  },
  {
    icon: <FaWhatsapp />,
    url: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
  },
]
