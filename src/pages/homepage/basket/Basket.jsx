import React from 'react'
import { NavLink } from 'react-router-dom'
import zakaz from '../../../img/zakaz.png'
import styles from './Basket.module.scss'
import st from '../../../img/strel.png'
const Basket = () => {
  return (
    <div>
         <div className={styles.zakaz}>
        <img src={zakaz}/>
        <div className={styles.a}>
        <NavLink to='/'>
        <button > <img src={st} alt="" /> Вернуться назад</button>
        </NavLink>
        </div>
        
    </div>
    
    </div>
  )
}

export default Basket