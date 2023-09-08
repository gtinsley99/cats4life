import React from "react";
import "../../App.css";
import { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { SlBasketLoaded } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";

const Navbar = ({ setShow, basketNumber }) => {
  // set the basket icon to open basket
  const openBasket = () => {
    setShow(true);
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // create the contact popup with the contact info
  const [contacts, showContacts] = useState(false);

  const openContacts = () => {
    showContacts(!contacts);
  };

  return (
    <div className="navBar">
      <div className="contactItem">
        <div className="navItem" onClick={openContacts}>
          <button className="contactBtn">
            <BiSolidContact />
          </button>
          <p>Contact Us</p>
        </div>

        {contacts ? (
          <div className="contactInfo">
            <p> DEVELOPERS:</p>
            <p>
              {" "}
              Margaret Irungu - <BsGithub /> MargaretIrungu95{" "}
            </p>
            <p>
              Jett Jagger - <BsGithub /> JettJagger{" "}
            </p>
            <p>
              Zaid Patel - <BsGithub /> Zaid779
            </p>
            <p>
              {" "}
              George Tinsley - <BsGithub /> gtinsley99
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="navItem" onClick={topFunction}>
        <button className="homeBtn" title="Click to scroll back to top">
          <AiTwotoneHome />
        </button>
        <p>Home</p>
      </div>
      <div className="navItem" onClick={openBasket}>
        <button className="basket" title="Click to open basket">
          <SlBasketLoaded className="basket" />
        </button>
        <p id="basketNav">Basket ({basketNumber})</p>
      </div>
    </div>
  );
};

export default Navbar;
