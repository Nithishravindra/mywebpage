import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'gatsby'

const Contact = () => (
  <Layout>
    <div className="about">
      <p>
        I'm Nithish Ravindra currently pursuing B.E in Computer Science from
        Vivesvaraya Technological University(VTU). It's been few months since I
        got into web development. Started with HTML, CSS and Javascript. I have
        picked ReactJS to help me through front-end. I've been also working on
        Backend Utilities like NodeJS, Python3, SQL and MongoDB to enhance
        Full-Stack services. You can see some of my work in{' '}
        <Link to="/projects">Project</Link> section of this site.
      </p>
    </div>
  </Layout>
)

export default Contact
