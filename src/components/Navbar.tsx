import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useScroll } from '../hooks/useScroll'
import Search from '../static/images/search-icon.svg'
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png'
import BellLogo from '../static/images/bell-logo.svg'
import DropdownArrow from '../static/images/drop-down-arrow.svg'
import DropdownContent from './DropdownContent'

const Navbar = () => {
  const navigate = useNavigate()
  const searchInput = React.useRef(null)
  const [userInput, setUserInput] = useState('')
  const [scrollDimensions] = useScroll()
  const { scrollY } = scrollDimensions

  const onChange = async (event: any) => {
    setUserInput(event.target.value)
  }

  useEffect(() => {
    if (
      document.activeElement === searchInput.current &&
      userInput.length === 0
    ) {
      navigate('/browse')
    }
    if (userInput.length > 0) navigate(`/search?q=${userInput}`)
  }, [userInput, searchInput])

  const onLogoClick = () => {
    setUserInput('')
  }

  return (
    <nav className={'navigation ' + (scrollY > 50 ? 'black' : '')}>
      <ul className='navigation__container'>
        <div className='navigation__container-link pseudo-link'>Home</div>
        <div className='navigation__container-link pseudo-link'>Improv</div>
        <div className='navigation__container-link pseudo-link'>Standup Comedy</div>
        <div className='navigation__container-link pseudo-link'>Storytelling</div>
      </ul>
    </nav>
  )
}

export default Navbar
