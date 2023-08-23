import React from 'react'
import './footer.scss'

const footer = () => (
  <footer className='footer'>
    <div className='footer__copyright'>
      &copy; {new Date().getFullYear()} Made with by{' '}
      <a
        className='footer__copyright--link'
        href='https://github.com/deeptianupindi'
      >
        D.A
      </a>
    </div>
  </footer>
)

export default footer
