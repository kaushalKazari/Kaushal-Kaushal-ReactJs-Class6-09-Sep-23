import React, { Component } from 'react'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from './pages/NoPage'
import './css/style2.css';

export default class App extends Component {
  render() {
    return (
       <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer></footer>
       </>
    )
  }
}
