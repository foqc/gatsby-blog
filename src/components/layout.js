import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Seo from "./seo"
import Footer from "./footer"

const Layout = ({ meta, children }) => {
  return (
    <>
      <Seo {...meta} />
      <Nav />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout