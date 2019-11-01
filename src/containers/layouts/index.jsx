import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { SEO, Container } from "components"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({children}) => {

  return (
    <>
      <SEO/>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
