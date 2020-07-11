import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Blogpost = ({ data }) => 
  
    (
        <div>
        <Layout>
        <div>
        <h1> {data.markdownRemark.frontmatter.title} </h1>
        <div dangerouslySetInnerHTML = {{__html: data.markdownRemark.html}} />
        </div>
        </Layout>
        </div>
    )     
    


//so passing a string and getting the data that matches with that, try in playground
export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {  
        html
        frontmatter {
            title
        }
    }
}
`
export default Blogpost;

