import React from 'react'
import Layout from "../components/Layout"
import Header from "../examples/Header"
import { graphql } from 'gatsby'

const examples = ({data}) => {
const { site: {info: {author} } } = data;

return (
  <Layout>
  <h1>
    Hello From Examples Page
</h1>
  <Header />
<h5>{author}</h5>
  </Layout>
)
}

export const data = graphql`
query {
  site{
    info:siteMetadata{
      person{
        name
        age
      }
      author
      data
      description
      tittle
    }
  }
}`

export default examples