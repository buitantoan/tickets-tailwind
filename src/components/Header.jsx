import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header py-6'>
        <nav className='container mx-auto px-4'>
          <ul>
            <li>
              <Link 
                to="/" 
                className='text-2xl font-medium text-white hover:text-active'>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header
