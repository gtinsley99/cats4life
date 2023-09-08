import React, { useState } from "react";

import { faker } from "@faker-js/faker";

import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

import AboutBox from "./AboutBox";



const CatBox = (props) => {
  const [showAbout, setShowAbout] = useState(Array(props.cats.length).fill(false));
  const addBasket = (index) => {
    let basketList = [...props.basket];
    let listAdd = [
      props.name[index],
      props.price[index],
      props.cats[index].url,
      index
    ];
    const allreadyExists = props.basket.some(
      (item) => item[2] === props.cats[index].url
    );
    if (allreadyExists === false) {
      let newPrice = Number(props.price[index]);
      props.setTotalPrice(props.totalPrice + newPrice);
      basketList.push(listAdd);
      props.setBasket(basketList);
      props.setBasketNumber(props.basketNumber + 1);
      props.setShowNav(true);
      let indexList = [...props.baskIndex];
      indexList.push(index);
      props.setBaskIndex(indexList);
    }
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
          <Content key={index}>
          <Para>Name: {props.name[index]}</Para>
          <Para>Breed: {item.breeds[0].name}</Para>
          <Para>Location: {props.location[index]}</Para>
          <Para>Price: £{props.price[index]} </Para>
          <Image src={item.url} />
          <Button onClick={() => openAboutMe(index)}>About Me</Button>
          <Button onClick={() => addBasket(index)}>Add to Basket</Button>
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