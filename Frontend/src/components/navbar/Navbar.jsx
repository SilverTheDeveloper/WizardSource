import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Themebutton from './Themebutton'
import { useState } from 'react'

function Navbar(props) {

  

  return (
    <>
      <nav className={`navbar  sticky top-0 glass h-[8vh]  z-50  ${props.textcolor} `}>


        <div className="navbar-start  lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <details>
                <summary>
                  <img className='h-6' src={`./menu/menu-${props.img}.png`} alt="" />
                </summary>

                <ul className={`p-2 ${props.mode ? 'bg-black bg-opacity-60 ' : 'bg-slate-100 bg-opacity-60'} bg-opacity-75`} >
                  <li><NavLink className={({ isActive }) => isActive ? "text-pink" : ""} to="/">HOMEPAGE</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-pink" : ""} to="/books">BOOKS</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-pink" : ""} to="/characters">CHARACTERS</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-pink" : ""} to="/about">ABOUT</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-pink" : ""} to="/contactme">CONTACT ME</NavLink></li>
                </ul>

              </details>
            </li>
          </ul>
        </div>


        <div className="navbar-center">
          <Link onClick={() => { window.scrollTo(0, 0); }} to="/" className="btn btn-ghost text-4xl ">Wizard Chamber</Link>
        </div>
        <div className="navbar-end mr-3">
          <Themebutton handletheme={props.handletheme} />
        </div>

      </nav>
    </>






  );
}

export default Navbar
