import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const CostumersSection = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    // <BackgroundImage
    //   id="perks"
    //   Tag="section"
    //   fluid={data.file.childImageSharp.fluid}
    // >
    <CostumersSectionWrapper>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
      </div>
    </CostumersSectionWrapper>
    // </BackgroundImage>
  )
}

const CostumersSectionWrapper = styled.section`
  text-align: center;
  /* padding: 100px 30px;

  .content-container {
    max-width: 500px;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 900px;
    }
  } */

  h2 {
    background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 50px;
  }
`

export default CostumersSection
