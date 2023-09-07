import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import {BiSolidContact} from "react-icons/bi";
import {SlBasketLoaded} from "react-icons/sl";

const Navbar = () => {

    return (
      <div className="navBar">
        <AiTwotoneHome />
        <BiSolidContact />
        <SlBasketLoaded className='basket' />
      </div>
    );
  };
  
  export default Navbar;