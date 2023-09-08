import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";
import AboutBox from "./AboutBox";

const CatBox = (props) => {
  const [showAbout, setShowAbout] = useState(false);

  const addBasket = () => {
    props.setTotalPrice(props.totalPrice + 5);
    props.setShow(true);
  };

  const openAboutMe = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
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
            {showAbout ? <AboutBox cats={props.cats} index={index}/> : ""}
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default CatBox;
