import React from 'react'
import { Link } from 'gatsby'

export const TitleLink = ({ style = {}, ...props }) => {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: style.color || '#222',
        fontWeight: 600,
        //fontFamily: 'Roboto, sans-serif',
        fontSize: style.fontSize || '1.3125rem',
        boxShadow: 'none'
      }}
      {...props}
    >
      {props.children}
    </Link>
  )
}
