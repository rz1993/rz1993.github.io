import React from "react"
import { Link, graphql } from "gatsby"
import TagList from '../components_new/Tags'
import Navbar from '../components_new/Navbar'
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styles from "./blog-post.module.css"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log("tags", post.frontmatter)
  return (
    <div>
      <Navbar location={location} title={siteTitle} />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className={styles.body}>
        <main className={styles.container}>
          <article className={styles.article}>
            <h1 className={styles.articleTitle}>
            { post.frontmatter.title }
            </h1>
            <h2 className={styles.articleDescription}>
            { post.frontmatter.description }
            </h2>
            <p className={styles.articleDate}>
              {post.frontmatter.date}
            </p>
            <section className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.html }} />
            {
              post.frontmatter.tags && <TagList tags={post.frontmatter.tags.split(',')} />
            }
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1)
              }}
            />
          </article>
          <nav>
            <div className={styles.pageNav}>
              <div>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </div>
              <div>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </main>
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
