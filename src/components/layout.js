import React from "react"
import styled from "styled-components"
import "typeface-gothic-a1"
import "./reset.css"
import { ModalProvider } from 'react-simple-hook-modal';
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/Footer/footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ModalProvider>
        <NavBar />
        <div className="layout">{children}</div>
        <Footer />
      </ModalProvider>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  font-family: "Gothic A1", sans-serif;
  color: #fff;
  /* background-color: #060c21; */
  background: linear-gradient(45deg, #060c21, #0d0139);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.45;
    /* margin: 1rem 0; */

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;

    @media (min-width: 1080px) {
      max-width: 650px;
    }
  }

  .flex-container {
    display: flex;

    &.trio-block {
      flex-direction: column;
      justify-content: center;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
  }

  .section-padding {
    padding: 100px 30px;
  }

  .text-center {
    text-align: center;
  }
`

export default Layout
