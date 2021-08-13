import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
      <nav>
          <ul>
              <li><Link to="/" className="item">Home</Link></li> {/*link to path should be same as mentioned in the route in index.js*/}
              <li><Link to="/about" className="item">About</Link></li>
              <li><Link to="/people" className="item">People</Link></li>
              
          </ul>
      </nav>
    )
}

export default Navbar
