import { useState} from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleTheme = () => {
  
    // toggle icons inside button
    // document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden');
    // document.getElementById('theme-toggle-light-icon').classList.toggle('hidden');
    
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }
    } 

    setToggleIcon(!toggleIcon);

  }


  return (
      <div className='header py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center	justify-between	'>
            <ul>
              <li>
                <Link 
                  to="/" 
                  className='text-2xl font-medium text-white hover:text-active'>Home</Link>
              </li>
            </ul>
            <div>
            <button onClick={toggleTheme} id="theme-toggle" type="button" className="text-gray-500 text-sm p-2.5 rounded-lg bg-white">
                {toggleIcon ? (
                  <svg id="theme-toggle-dark-icon" className="w-5 h-5" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                ) : (
                  <svg id="theme-toggle-light-icon" className="w-5 h-5" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                )}
            </button>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Header
