import React from 'react'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

export default () => (
  <div className="social-links">
    <ul>
      <li>
        <div className="social-block">
          <h3>Twitter</h3>
          <a href="https://twitter.com/nithishravindra" className="social-link">
            <FaTwitterSquare className="social-icon">Twitter</FaTwitterSquare>
          </a>
        </div>
      </li>
      <li>
        <div className="social-block">
          <h3>Github</h3>
          <a href="https://github.com/Nithishravindra" className="social-link">
            <FaGithubSquare className="social-icon">Github</FaGithubSquare>
          </a>
        </div>
      </li>
    </ul>
  </div>
)
