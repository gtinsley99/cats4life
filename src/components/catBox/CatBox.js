import { Wrapper, Content, Button, Para, Image } from "./CatBox.styles";

const CatBox = (props) => {

  const addBasket = (index) => {
    let basketList = [...props.basket];
    let listAdd = [props.name[index], props.price[index], props.cats[index].url];
    const allreadyExists = props.basket.some((item) => item[2] === props.cats[index].url)
    console.log(allreadyExists);
    console.log(listAdd);
    console.log(basketList);
    if(allreadyExists === false){
    let newPrice = Number(props.price[index]);
    props.setTotalPrice(props.totalPrice + newPrice);
    basketList.push(listAdd);
    props.setBasket(basketList);
    props.setBasketNumber(props.basketNumber + 1);
    props.setShowNav(true);
    };
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
