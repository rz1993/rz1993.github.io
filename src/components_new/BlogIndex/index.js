import React from 'react'
import { Link, graphql } from "gatsby"
import BlogPreview from '../BlogPreview'
import styles from './blog-index.module.css'


const BlogIndex = ({ posts }) => {
  console.log(styles)
  return (
    <div
      className={styles.blogIndex}>
      {posts.map(({node}) => <BlogPreview key={node.id} {...node} />)}
    </div>
  )
}

export default BlogIndex;
