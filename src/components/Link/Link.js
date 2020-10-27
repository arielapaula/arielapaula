import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Link.module.scss'

const Link = ({ href, text, onClick, children, classes }) => {
  return (

    <NavLink to={`${href}`} activeClassName="activeCategory" className={
      `${styles.Link} ${classes ? classes : ""}`} onClick={onClick}>
      {text && text}
      {children}
    </NavLink>

  );
};

export default Link;
