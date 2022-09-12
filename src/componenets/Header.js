import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
        <nav className='navHeader'>
            <ul className='ulHeader'>
                <li>
                    <Link className='linkHeader' to="/">Home</Link>
                </li>
                <li>
                    <Link className='linkHeader' to="/listado">Listado</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header