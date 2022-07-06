import React from 'react'
import Content from '../../components/Content'
import Sneakers from '../../components/Sneakers';
import Krossovki from '../../components/Krossovki';
import styles from '../../components/Homepage.module.scss'
const Homepage = ({ jso }) => {

  return (
    <div>
      <Content />
      <Sneakers />


    <div className={styles.it}>
    {jso.map(item => (
        <Krossovki item={item} key={item.id} />
      ))}


    </div>
    </div >

  )
}

export default Homepage