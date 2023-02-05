import React from 'react'
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import twitter from "./images/twitter.svg"
import youtube from "./images/youtube.svg"
import playStore from "./images/android app store.png"
import appleStore from "./images/apple store.png"
import logo from "./images/asus_logo.png"


const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex align-items-end  ">
          <a href={"http://www.facebook.com/asus.es"} target={"_blank"} rel="noreferrer" className="ms-3 mb-2"> <img src={facebook} alt={"Facebook"} width={"22"} /> </a>
          <a href={"https://www.instagram.com/asus_es/"} target={"_blank"} rel="noreferrer" className="ms-3 mb-2"> <img src={instagram} alt={"Instagram"} width={"22"} /> </a>
          <a href={"http://twitter.com/asus_ib"} target={"_blank"} rel="noreferrer" className="ms-3 mb-2"> <img src={twitter} alt={"Twitter"} width={"22"} /> </a>
          <a href={"http://www.youtube.com/asusiberica"} target={"_blank"} rel="noreferrer" className="ms-3 mb-2"> <img src={youtube} alt={"Youtube"} width={"22"} /> </a>

        </div>
        <div className="col d-flex align-items-center justify-content-end ">
          <a href={"/"} className="ms-3"> <img src={playStore} alt={"PlayStore"} width={"100"} /> </a>
          <a href={"/"} className="ms-3"> <img src={appleStore} alt={"AppleStore"} width={"100"} /> </a>
        </div>
        <hr />
        <div className="col">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-secondary"  href={"/"}>Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href={"/"}>About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href={"/"}>Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href={"/"}>Learn more</a>
            </li>
          </ul>
        </div>
        <div className="col text-end text-secondary">
              <p> <img src={logo} alt="Logo asus azul" width={"50"} />© Asus 2023 </p>
        </div>

      </div>
    </div>
  )
}

export default Footer