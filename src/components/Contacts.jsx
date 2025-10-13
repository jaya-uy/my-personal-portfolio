import React from "react";
import style from "./css/Contacts.module.css";
const Contacts = () => {
  return (
    <div className={style.main} id="contacts">
      <h2>Contacts</h2>
      <div className={style.container}>
        <a href="">
          <i class="fa-solid fa-envelope"></i>
          <span>jayayzabellerocero722@gmail.com</span>
        </a>
        <a href="https://www.facebook.com/yzabelle.rabino.7#">
          <i class="fa-brands fa-facebook"></i>
          <span>Jaya Yzabelle Rabino Rocero</span>
        </a>
        <a href="https://www.messenger.com/t/100030112898006">
          <i class="fa-brands fa-facebook-messenger"></i>
          <span>Jaya Yzabelle Rabino Rocero</span>
        </a>
        <a href="">
          <i class="fa-solid fa-phone"></i>
          <span>09381715698</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
