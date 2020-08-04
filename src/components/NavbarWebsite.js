import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul className="horizontal-ul">
        <li>
          <Link className="link" activeClassName="link-active" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" activeClassName="link-active" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="link" activeClassName="link-active" to="/products">Products</Link>
        </li>
        <li>
          <Link className="link" activeClassName="link-active" to="/examples">Examples</Link>
        </li>
        <li>
          <Link className="link" activeClassName="link-active" to="/images">Images</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
