import { SettingsOverscanOutlined } from '@mui/icons-material'
import React from 'react'
import styles from './Sneakers.module.scss'
const Sneakers = ({setValue,value}) => {
  return (
    <div className={styles.kross}>
        <h1>Все кроссовки</h1>
        <input type="text"
         placeholder='Поиск...'
         value={value}
         onChange={e=>SettingsOverscanOutlined(e.target.value)} />
    </div>
  )
}

export default Sneakers