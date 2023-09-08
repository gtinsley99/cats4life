import React from "react";
import { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { SlBasketLoaded } from "react-icons/sl";
import {BsGithub } from "react-icons/bs";

const Navbar = ({ setShow, basketNumber }) => {
  // set the basket icon to open basket
  const openBasket = () => {
    setShow(true);
  };


  // to create the scroll to top function on the home button
  let mybutton = document.getElementsByClassName("homeBtn");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style = "block";
    } else {
      mybutton.style = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // to create the contacts function

  // create the contact popup with the contact info
  const [contacts, showContacts] = useState(false);

  const openContacts = () => {
   showContacts(!contacts)
  };
  
  return (
    <div className="navBar">
      <div className="navItem">
        <button className="contactBtn" onClick={openContacts} >
          <BiSolidContact />
        </button>
        <p>Contact Us</p>
      
        {contacts ? (
        <div className="contactInfo">
        <span>
          DEVELOPERS:
          Margaret Irungu - <BsGithub/> MargaretIrungu95
          Jett Jagger - <BsGithub/> JettJagger
          Zaid Patel - <BsGithub/> Zaid779
          George Tinsley - <BsGithub/> gtinsley99
        </span>
      </div>) : ""}
     
      
        

      </div>

      <div className="navItem">
        <button className="homeBtn" title="Click to scroll back to top" onClick={topFunction}> 
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
