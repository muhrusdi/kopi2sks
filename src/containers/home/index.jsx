import React from "react"
import { Button } from "antd"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import Layout from "containers/layouts"

const ContentWrap = styled.div`

`

const ContentInner = styled.div`
  padding-top: 60px;
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 518) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tagLine: file(relativePath: { eq: "tagline.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ig: file(relativePath: { eq: "instagram-fill.png" }) {
        childImageSharp {
          fluid(maxWidth: 56) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medium: file(relativePath: { eq: "medium-fill.png" }) {
        childImageSharp {
          fluid(maxWidth: 56) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ContentWrap>
        <ContentInner>
          <div>
            <Img css={`
              max-width: 318px;
              margin: 0 auto;
            `} fluid={data.logo.childImageSharp.fluid}/>
            <div css={`
              margin-top: 80px;
            `}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Img css={`
                  max-width: 518px;
                  margin: 0 auto;
                `} fluid={data.tagLine.childImageSharp.fluid}/>
              </motion.div>
            </div>
            <ul css={`
              list-style: none;
              display: flex;
              padding: 0;
              margin: 0;
              justify-content: center;
              margin-top: 70px;
              & > li {
                padding: 0 10px;
              }
            `}>
              <li>
                <a href="https://www.instagram.com/kopi2sks/" target="_blank">
                  <Img css={`
                    width: 56px;
                  `} fluid={data.ig.childImageSharp.fluid}/>
                </a>
              </li>
              <li>
                <a href="https://medium.com/kopi2sks" target="_blank">
                  <Img css={`
                    width: 56px;
                  `} fluid={data.medium.childImageSharp.fluid}/>
                </a>
              </li>
            </ul>
          </div>
        </ContentInner>
      </ContentWrap>
    </Layout>
  )
}

export default Home