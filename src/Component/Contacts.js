import React from "react";
import img from "../Component/contact.png";
import img1 from "../Component/whatsapp.png"
import img2 from "../Component/twitter.png"

export const Contacts = () => {
  return (
    <div className="parent">
      <h1 className="form-heading">
        <u> CONTACT ME</u>
      </h1>
      <div className="main-form">
        <form>
          <div>
            <img src={img} alt="icon" />
          </div>
          <input type="text" placeholder="Name (required)" required />
          <input type="text" placeholder="Email address (required)" required />
          <input type="text" placeholder="Topic (required)" required />
          <textarea placeholder="Subject (required)" required></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="social-media">
            <a href="https://wa.me/qr/HSK4OP3JIOD7N1"><img src={img1} alt="" /></a>
            <a href="https://twitter.com/_visshhaal"><img src={img2} alt="" /></a>

        </div>
      </div>
    </div>
  );
};
