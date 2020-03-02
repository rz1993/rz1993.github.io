import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const SideBar = ({ title }) => {
  const header = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
        fontWeight: '700',
        fontSize: '1.2rem'
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>

    </h3>
  )

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginRight: '16px'
    }}>
      <header>{ header }</header>
      <div style={{
        color: '#7b7b7b'
      }}>MLE @ FactSet Research Systems.</div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Github</a>
        <a href="#">Resume</a>
      </div>
    </div>
  )
}

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        display: 'flex',
        alignContent: 'flex-start'
      }}
    >
      <SideBar title={title} />
      <div style={{ borderLeft: '1px solid #7b7b7b', height: '50%' }}>{``}</div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
