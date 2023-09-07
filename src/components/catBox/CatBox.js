import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

const CatBox = (props) => {

  const addBasket = (index) => {
    let newPrice = Number(props.price[index]);
    props.setTotalPrice(props.totalPrice + newPrice);
    let basketList = [...props.basket];
    let listAdd = [props.cats[index]];
    basketList.push(listAdd);
    props.setBasket(basketList);
    props.setShow(true);
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
            <Button onClick={() => addBasket(index)}>Add to Basket</Button>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default CatBox;
