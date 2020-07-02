import React from 'react'
import Layout from '../layout/Layout'
import SocialLinks from '../data/socialLinks'

const Contact = () => {
  return (
    <Layout>
      <h2 className="social-heading"> Catch me up online </h2>
      <SocialLinks className="social-link-position" />
    </Layout>
  )
}

export default Contact
