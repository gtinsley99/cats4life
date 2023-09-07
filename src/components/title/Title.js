import React from 'react';
import {BiSolidCat} from "react-icons/bi";
import {FaCat} from "react-icons/fa";


export const Title = () => {
  return (
    <div className='titles'>
        <h1 className='h1'> <BiSolidCat /> 4 LYFE</h1>
        <h2 className='h2'>Give <FaCat/> a happy home today! </h2>
        <h3 className='h3'>HAPPY SCROLLING!</h3>
    </div>
  )
}

export default Title;