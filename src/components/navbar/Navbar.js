import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { SlBasketLoaded } from "react-icons/sl";

const Navbar = ({ setShow, basketNumber }) => {
  // set the basket icon to open basket
  const openBasket = () => {
    setShow(true);
  };

  return (
    <div className="navBar">
      <div className="navItem">
        <button className="contactBtn">
          <BiSolidContact />
        </button>
        <p>Contact Us</p>
      </div>
      <div className="navItem">
        <button className="homeBtn">
          <AiTwotoneHome />
        </button>
        <p>Home</p>
      </div>
      <div className="navItem" onClick={openBasket}>
        <button className="basket">
          <SlBasketLoaded className="basket" />
        </button>
        <p id="basketNav">Basket ({basketNumber})</p>
      </div>
    </div>
  );
};

export default Navbar;
