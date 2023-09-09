import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <>
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      </>
    )
  }
}
