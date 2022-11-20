import * as React from 'react';

const Header:React.FC = () => {
  return(
    <header>
      <h2 className="header--title"><a href="/">S</a></h2>
      <h4 className="header--subtitle">
        <a href="/Home"> Home </a> | 
        <a href="/projects"> Projects </a> | 
        <a href="/about"> About </a>
      </h4>
    </header>
  )
}

export default Header;