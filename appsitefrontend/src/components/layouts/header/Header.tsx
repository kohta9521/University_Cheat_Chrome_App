import React, { FC } from "react";

// css import
import sytles from "./Header.module.css";



const Header: React.FC = () => {
  return (
    <div className={sytles.header}>
      <div className={sytles.container}>
    header
      </div>
    </div>
  )
}

export default Header;