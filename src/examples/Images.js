import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from "../images/image-3.jpg"
import Image from "gatsby-image"

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image-1.jpg"}) {
    childImageSharp {
      fixed(width: 500, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image-2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

const Images = () => {
  const data = useStaticQuery(getImages);
  
  return (
    <section className="images" style={{marginTop: "2rem"}}>
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="fii" />
      </article>

      <article className="single-image">
        <h3>Fixed Image Blur</h3>

        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>

      <article className="single-image">
        <h3>Fluid Image Blur</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
    </section>
  )
}

export default Images
