import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({title, description, pathname, image}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          twitter
          siteUrl
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 518) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { siteUrl, twitter } = data.site.siteMetadata

  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const metaImage = image ? image : data.logo.childImageSharp.src

  return (
    <Helmet defer={false} defaultTitle={metaTitle} titleTemplate={`${metaTitle} - %s`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <title lang="id">{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id" />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="og:image" content={`${siteUrl}${metaImage}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  )
}

export default SEO;
