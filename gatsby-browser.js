import React from "react"
import Layout from "containers/layouts"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}