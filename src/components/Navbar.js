import React from 'react'
import { BsListTask } from 'react-icons/bs'
import PageLinks from '../data/link'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <button type="button" className="toggle-btn">
              <BsListTask></BsListTask>
            </button>
          </div>
          <PageLinks styleClass="nav-links" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
