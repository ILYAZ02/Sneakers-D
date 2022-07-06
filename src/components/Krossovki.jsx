import chekedImg from '../img/check.svg'
import checkImg from '../img/plus.svg'
import React, { useState } from 'react'
import styles from './Krossovki.module.scss'
import likeImg from '../img/ser.svg'
import likedImg from '../img/red.svg'
const Krossovki = ({ item }) => {

  const [check, setCheck] = useState(false)
  const [like, setLike] = useState(false)


  function handleClick() {
    setCheck(!check)

    // console.log(check)
  }

  function anClick() {
    setLike(!like)
  }

  return (
    <div className={styles.kros}>
      <div className={styles.kross}>
        <img src={item.image} />
        <h3>{item.name}</h3>
        <div className={styles.flex}>
          <h5>{item.id}</h5>
          <h4>{item.price}</h4>
          <div className={styles.input}>
            <img onClick={handleClick}
              src={check ? chekedImg : checkImg}
              alt="check" />
          </div>

          <div className={styles.like}>
            <img onClick={anClick}
              src={like ? likedImg : likeImg}
              alt="che"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Krossovki