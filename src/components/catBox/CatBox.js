import React, { useState } from "react";

import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

import AboutBox from "./AboutBox";

const CatBox = (props) => {
  const [showAbout, setShowAbout] = useState(
    Array(props.cats.length).fill(false)
  );
  const addBasket = (index) => {
    let basketList = [...props.basket];
    let listAdd = [
      props.name[index],
      props.price[index],
      props.cats[index].url,
      index,
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
                  origin={item.breeds[0].origin}
                  desc={item.breeds[0].description}
                  weight={item.breeds[0].weight}
                  hypo={item.breeds[0].hypoallergenic}
                  energy={item.breeds[0].energy_level}
                  grooming={item.breeds[0].grooming}
                  life={item.breeds[0].life_span}
                  shed={item.breeds[0].shedding_level}
                  social={item.breeds[0].social_needs}
                  adapt={item.breeds[0].adaptability}
                  affection={item.breeds[0].affection_level}
                  temp={item.breeds[0].temperament}
                  showAbout={showAbout}
                  setShowAbout={setShowAbout}
                  index={index}
                />
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
