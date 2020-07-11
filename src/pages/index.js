import React from "react"
import {graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3 `
margin-bottom: 20px;
color: blue;
`

const IndexPage = ({data}) => {

  console.log(data)

return(
  <Layout>

    <SEO title="Home" />
    <div>
    <h1 >Offspring Love</h1>
    <h4> {data.allMarkdownRemark.totalCount} </h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <div key = {node.id}>
          <BlogTitle>
          <BlogLink to = {node.fields.slug}>
            { console.log(node.fields)}
          <h2> {node.frontmatter.title} </h2>
          </BlogLink>
          </BlogTitle>
          
          <h3> {node.frontmatter.date} </h3>
          <p> {node.excerpt} </p>
        </div>
      ))
    }
    
    </div>

    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export default IndexPage
export const query = graphql `
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          title
          description
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
}

`
