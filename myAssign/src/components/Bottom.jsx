import React from 'react'
import Image1 from '../../public/assets/LOGO PNG_edited.jpg'
import Image2 from '../../public/assets/revised nahar logo.jpg'

import styles from './../styles/Bottom.module.css'

const Bottom = () => {
  return (
    <footer id={styles.foot}>
      <div id={styles.image}>
        <img src={Image1} alt="Not Found" id={styles.image1}/>
        <img src={Image2} alt="Not Found" id={styles.image2}/>
      </div>
      <div id={styles.links}>
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Login</a>
        <a href='#'>Register User</a>
        <div id={styles.contact}>
        <div id={styles.contact1}>
          Email:blend@nahar.com       
        </div>
        <div id={styles.contact2}>       
          <p>&copy; powered by BULB STUDIO</p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Bottom
