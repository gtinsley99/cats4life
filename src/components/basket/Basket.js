import {
  Wrapper,
  CloseButton,
  BasketOrder,
  BasketName,
  BasketImage,
  BasketPrice,
  CheckoutButton,
  TotalAmount,
  BasketItem,
  BasketDelete,
} from "./Basket.styles";

const Basket = (props) => {
  const closeBasket = () => {
    props.setShow(false);
  };

  const deleteItem = (index) => {
    let basketList = [...props.basket];
    let indexList = [...props.baskIndex];
    let catIndex = props.basket[index][3];
    const findInArray = (item) => item === catIndex;
    let arrayPos = indexList.findIndex(findInArray);
    indexList.splice(arrayPos, 1);
    props.setBaskIndex(indexList);
    basketList.splice(index, 1);
    props.setTotalPrice(props.totalPrice - props.basket[index][1]);
    props.setBasket(basketList);
    props.setBasketNumber(props.basketNumber - 1);
  };

  const removeCats = () => {
    let indexList = [...props.baskIndex];
    indexList.sort((a, b) => b - a);
    let catList = [...props.cats];
    let nameList = [...props.name];
    let priceList = [...props.price];
    let locationList = [...props.location];
    for (let i = 0; i < indexList.length; i++) {
      catList.splice(indexList[i], 1);
      nameList.splice(indexList[i], 1);
      priceList.splice(indexList[i], 1);
      locationList.splice(indexList[i], 1);
    }
    props.setCats(catList);
    props.setName(nameList);
    props.setPrice(priceList);
    props.setLocation(locationList);
    props.setBasket([]);
    props.setBaskIndex([]);
    props.setTotalPrice(0);
    props.setBasketNumber(0);
    props.setShow(false);
  };

  return (
    <div>
      <Wrapper>
        <CloseButton onClick={closeBasket}>Close Basket</CloseButton>
        <BasketOrder>Your order:</BasketOrder>
        {props.basket.map((item, index) => {
          return (
            <BasketItem key={index}>
              <BasketName>Name: {props.basket[index][0]}</BasketName>
              <BasketImage src={props.basket[index][2]} />
              <BasketPrice>Price: £{props.basket[index][1]}</BasketPrice>
              <BasketDelete onClick={() => deleteItem(index)}>
                Delete
              </BasketDelete>
            </BasketItem>
          );
        })}

        <TotalAmount>Total price: £{props.totalPrice.toFixed(2)}</TotalAmount>
        <CheckoutButton onClick={removeCats}>
          Proceed to Checkout
        </CheckoutButton>
      </Wrapper>
    </div>
  );
};

export default Basket;
