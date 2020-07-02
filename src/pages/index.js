import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <header className="heading">
      <div className="section-center heading-center">
        <div>
          <h1>Hey, I'm Nithish.</h1>
          <h4>
            Welcome to my site, I'm web developer and guitarist from bengaluru.
          </h4>
          <Link to="/about"> Know More</Link>
        </div>
      </div>
    </header>
  </Layout>
)
