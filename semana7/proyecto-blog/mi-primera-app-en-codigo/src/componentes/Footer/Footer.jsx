import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">codiGo, copyright 2021</p>
      <div className="footer__social-media-container">
        <div className="footer__social-media-container__icon">
          <img
            src="https://img.icons8.com/office/16/000000/facebook-new.png"
            alt="Facebook"
          />
          <p className="footer__social-media-container__icon__text"></p>
          Facebook
        </div>
        <div className="footer__social-media-container__icon">
          <img
            src="https://img.icons8.com/office/16/000000/twitter.png"
            alt="Twitter"
          />
          <p className="footer__social-media-container__icon__text"></p>
          Twitter
        </div>
        <div className="footer__social-media-container__icon">
          <img
            src="https://img.icons8.com/office/16/000000/instagram-new.png"
            alt="instagram"
          />
          <p className="footer__social-media-container__icon__text"></p>
          Instagram
        </div>
      </div>
    </div>
  );
};

export default Footer;
