import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { TitleLink } from '../shared'
import styles from './navbar.module.css'
import Image from 'gatsby-image'


const NavLink = ({ last=false, ...props }) => {
  return (
    <Link
      className={styles.link}
      {...props}
    >
    {props.children}
    </Link>
  )
}

const Navbar = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-roland.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata

  return (
    <div
      className={styles.container}>
      <h2
        className={styles.header}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: '1.0625rem',
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <TitleLink to="/" className={styles.titleLink}>{title}</TitleLink>
      </h2>
      <div
        className={styles.linkContainer}>
        <NavLink to='/'>Blog</NavLink>
        <NavLink to='/about/'>About</NavLink>
        <NavLink to='/projects/' last={true}>Projects</NavLink>
      </div>
    </div>
  )
}

export default Navbar;
