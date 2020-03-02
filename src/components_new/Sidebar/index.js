import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from './sidebar.module.css'


const borderLight = "#eee"
const fontLight = "gray"
const fontBlack = 'black'
const fontBlue = '#164bc5'

const NavLink = ({ to, text, last }) => {
  return (
    <Link
      activeStyle={{
        color: 'blue',
        fontWeight: 600
      }}
      className={styles.link}
      to={ to }>
      {text}
    </Link>
  )
}

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SideBarQuery {
      avatar: file(absolutePath: { regex: "/pic-roland.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, description, social } = data.site.siteMetadata
  return (
    <div
      className={styles.container}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h2
        className={styles.sitename}
      >
        <Link to="/" className={styles.sitenameLink}>{author}</Link>
        <a
          className={styles.github}
          href={`https://github.com/${social.github}`}
        >
        @{social.github}
        </a>
      </h2>
      <p className={styles.description}>
        { description }
      </p>
      <ul className={styles.linkContainer}>
        <NavLink to={'/blog/'} text='Blog' />
        <NavLink to={'/about/'} text='About' />
        <NavLink to={'/projects/'} text='Projects' last={true} />
      </ul>
    </div>
  )
}

export default Sidebar;
