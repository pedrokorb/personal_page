import React, { useEffect, useRef, useState } from "react"
import { Link } from 'gatsby'

import { FaAngleDown } from 'react-icons/fa'
import Logo from '../../images/pedrokorb.svg'

/* eslint-disable */

const links = [
  // {
  //   name: "Sobre",
  //   value: "/about"
  // },
  // {
  //   name: "Propostas",
  //   value: "/propostas"
  // },
  // {
  //   name: "Projetos",
  //   value: "/projetos"
  // },
  // {
  //   name: "Trajetória",
  //   value: "/trajetoria"
  // },
  // {
  //   name: "Fotos",
  //   value: "/fotos"
  // }
]

const NavBar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [scrolled, changeState] = useState(false)
  const navbar = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 50 && !scrolled) {
        changeState(true)
      } else if (document.documentElement.scrollTop <= 50 && scrolled)
        changeState(false)
    }

    window.addEventListener("scroll", onScroll)

    setNavbarHeight(navbar.current.getBoundingClientRect().height)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scrolled])

  return (
    <div 
      className={`z-50 fixed w-full duration-300 transition-all nav ${scrolled ? "p-4" : "p-5 bg-transparent"}`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex justify-between items-center my-auto `}
        ref={navbar}
      >
        <Link to="/">
          <img 
            src={Logo}
            alt={`Logotipo Candidato ${navbarHeight}`} 
            className={`duration-300 transition-all ${scrolled ? "w-32" : "w-40"}`} 
          />
        </Link>
      
        {links.length > 0 && (
          <div
            className={`text-white outline-0 lg:hidden`}
            onClick={() => {
              setSidebarOpen(!sidebarOpen)
            }}
          >
            <FaAngleDown
              style={{
                transform: 'rotate(0deg)',
                transition: 'all 0.3s ease-out',
                // eslint-disable-next-line
                transform: sidebarOpen ? 'rotate(180deg)' : ''
              }}
              className="w-8 h-8"
            />
            
          </div>
          
        )}
      
        <div className="hidden lg:block">
          <div className={`flex text-white`}>
            {links.map((link, index) => (
              <Link className="border-b-2 border-transparent hover:border-primary" key={index} to={link.value}>
                <p className="px-2 hover:text-primary">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

        {sidebarOpen && (
          <div>
            <div 
              className={`lg:hidden text-white duration-300 transition-all ${scrolled ? "bg-opacity-100" : "bg-black bg-opacity-75 shadow-md rounded-lg"} m-4 h-full flex flex-col justify-center`}
            >
              <div className="text-center">
                <div className={`nav-links`}>
                  {links.map((link, index) => (
                    <Link className="border-b-2 border-transparent hover:border-primary" key={index} to={link.value}>
                      <p className="py-2 hover:text-primary ">{link.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      
    </div>
  )
}

export default NavBar