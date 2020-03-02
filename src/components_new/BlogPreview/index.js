import React from 'react'
import { Link } from 'gatsby'
import { TitleLink } from '../shared'
import styles from './blog-preview.module.css'
/*
node {
  excerpt
  fields {
    slug
  }
  frontmatter {
    date(formatString: "MMMM DD, YYYY")
    title
    description
  }
}
*/

const BlogPreview = ({ excerpt, fields, frontmatter }) => {
  console.log(styles)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <TitleLink to={`/${fields.slug}/`}>{frontmatter.title}</TitleLink>
      </h2>
      <div className={styles.subHeader}>
        {frontmatter.date}
        <span className={styles.subHeaderSpacer}></span>
        <span className={styles.subHeaderTag}>{frontmatter.tag.toUpperCase()}</span>
      </div>
      <p className={styles.description}>
      {frontmatter.description || excerpt}
      </p>
      <Link to={`/${fields.slug}`} className={styles.blogLink}>Read</Link>
    </div>
  )
}

export default BlogPreview;
