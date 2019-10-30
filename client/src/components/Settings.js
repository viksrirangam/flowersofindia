import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => (
  <div>
    <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
    <p>Settings goes here..</p>
  </div>
)

export default Settings
