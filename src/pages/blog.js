import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
//import Layout from "../components/layout_home"
import Sidebar from '../components_new/Sidebar'
import BlogIndex from '../components_new/BlogIndex'
import BlogPreview from '../components_new/BlogPreview'
//import SEO from "../components/seo"
import { rhythm } from "../utils/typography"


const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log("location:", location)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '60%',
          alignItems: 'flex-start',
          marginTop: '24px'
        }}>
        <Sidebar />
        <BlogIndex posts={posts} />
      </div>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tag
          }
        }
      }
    }
  }
`
