import React, { useState } from "react";

import { faker } from "@faker-js/faker";

import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

import AboutBox from "./AboutBox";



const CatBox = (props) => {
  const [showAbout, setShowAbout] = useState(Array(props.cats.length).fill(false));
  const addBasket = () => {
    props.setTotalPrice(props.totalPrice + 5);
    props.setShow(true);

  };

  const openAboutMe = (index) => {
    const updatedShowAbout = [...showAbout];
    updatedShowAbout[index] = true;
    setShowAbout(updatedShowAbout);
  };

  const handleCloseAbout = (index) => {
    const updatedShowAbout = [...showAbout];
    updatedShowAbout[index] = false;
    setShowAbout(updatedShowAbout);
  };

  return (
    <Wrapper>
      {props.cats.map((item, index) => {
        return (
          <Content key={index} value={index}>
            <Para>Name: {faker.person.firstName()}</Para>
            <Para>Breed: {item.breeds[0].name}</Para>
            <Para>Location: {faker.location.country()}</Para>
            <Para>Price: £{faker.commerce.price({ min: 75, max: 95 })} </Para>
            <Image src={item.url} />
            <Button onClick={() => openAboutMe(index)}>About Me</Button>
            <Button onClick={addBasket}>Add to Basket</Button>
            {showAbout[index] ? (

<div>

  <AboutBox

    about={item.breeds[0].name}

    desc={item.breeds[0].description}

    age={item.breeds[0].age}

    weight={item.breeds[0].weight}

  />

  <Button onClick={() => handleCloseAbout(index)}>Close</Button>

</div>

) : (

""

)}
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default CatBox;