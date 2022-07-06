import React from 'react'
import logo from  '../img/logo.svg'
import icon from '../img/Iconka.svg'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className={styles.menu}>
        <NavLink to='/'>
        <img src={logo}/>
        </NavLink>
    
      <div className={styles.cart}>
       <NavLink to='basket'>
      <img src={icon}/>
      </NavLink>
      <div className={styles.basket}>
          <span>2000</span>
          <p>сом</p>
      </div>
      </div>
    </div>
   
    
    
  )
}

export default Header