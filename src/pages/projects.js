import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import project from '../data/projectList'
import Layout from '../layout/Layout'

const Projects = () => (
  <Layout>
    <article className="project">
      {project.map(item => (
        <div key={item.id} className="project-info">
          <h3>{item.title}</h3>
          <p className="project-desc">{item.description}</p>
          <div className="project-stack">
            {item.techStack.map((i, index) => (
              <span key={index}>{i}</span>
            ))}
          </div>
          <div className="project-links">
            View source code on -{' '}
            <a href={item.githubLink}>
              <FaGithubSquare className="project-icon" />
            </a>
          </div>
        </div>
      ))}
    </article>
  </Layout>
)

export default Projects
