import React from 'react'
import logo from "../logo.png"
import {
Link
} from "react-router-dom";
function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
            
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo...." id="logo-1" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contacts">Contacts</Link>
              </li>
              
            </ul>
          </div>
        </div>

      </nav>
    )
}

navbar.propTypes = {

}

export default navbar

