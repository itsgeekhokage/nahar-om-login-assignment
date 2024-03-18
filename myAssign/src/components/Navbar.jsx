import styles from "../styles/navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const Navbar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);
  const handleMenu = () => {
    setShowNavlinks(!showNavlinks);
  };
  return (
    <div className={styles.container}>
      <img src="public/images/logo.jpg" alt="logo" />
      <div className={styles.innercontainer}>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Offerings</a>
        <a href="">Investments</a>
        <a href="">contact</a>
        <button className={styles.btn}>Reserve Access</button>
      </div>
      {showNavlinks ? (
        <RxCross2 className={styles.menu} onClick={handleMenu} />
      ) : (
        <IoMdMenu className={styles.menu} onClick={handleMenu} />
      )}
      {showNavlinks && (
        <div className={styles.mobLinks}>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Offerings</a>
          <a href="">Investments</a>
          <a href="">contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
