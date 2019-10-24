import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import SEO from "components/seo"
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout