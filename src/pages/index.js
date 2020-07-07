import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
// import Image from 'gatsby-image'
// import { graphql, useStaticQuery } from 'gatsby'

// const getImage = graphql`
//   {
//     file(relativePath: { eq: "main-copy.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
export default () => {
  // const data = useStaticQuery(getImage)

  return (
    <Layout>
      <header className="heading">
        <div className="section-center heading-center">
          <div>
            <h1>Hey, I'm Nithish</h1>
            <h4 className="set-width">
              Welcome to my site, I am a web developer and guitarist from
              Bengaluru.
            </h4>
            <Link to="/about"> Know More</Link>
            {/* <Image
              className="img-width"
              fluid={data.file.childImageSharp.fluid}
            /> */}
          </div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Nithish R</title>
          </Helmet>
        </div>
      </header>
    </Layout>
  )
}
