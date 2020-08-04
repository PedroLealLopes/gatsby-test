import React from 'react'
import {Link} from "gatsby"

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="wrapper">
        <Link activeClassName="link-active" to="/">Home</Link>
        <Link activeClassName="link-active" to="/images">Images</Link>
        <Link activeClassName="link-active" to="/examples">Examples</Link>
        <Link activeClassName="link-active" to="/products">Products</Link>
        <Link activeClassName="link-active" to="/blog">Blog</Link>
      </div>
    </div>
  )
}

export default SideMenu
