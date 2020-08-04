import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        tittle
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        tittle,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2> Title: {tittle}</h2>
      <h2> Name: {name}</h2>
    </div>
  )
}

export default Header
