import { faker } from "@faker-js/faker";
import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

const CatBox = (props) => {

  const addBasket = () => {
    // let basketList = [...props.basket];
    // let listAdd = [props.cats[index]];
    // basketList.push(listAdd);
    // props.setBasket(basketList);
    props.setShow(true);
    console.log("hello");
  };

  return (
    <Wrapper>
      {props.cats.map((item, index) => {
        return (
          <Content key={index} value={index}>
            <Para>Name: {faker.person.firstName()}</Para>
            <Para>Breed: {item.breeds[0].name}</Para>
            <Para>Location: {faker.location.country()}</Para>
            <Para>Price: £{faker.commerce.price({ min: 20, max: 30 })} </Para>
            <Image src={item.url} />
            <Button onClick={addBasket}>Add to Basket</Button>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default CatBox;
