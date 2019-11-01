import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { SEO } from "components"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({children}) => {

  return (
    <>
      <SEO/>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
