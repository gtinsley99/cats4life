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
    basketList.splice(index, 1);
    props.setTotalPrice(props.totalPrice - props.basket[index][1]);
    props.setBasket(basketList);
    props.setBasketNumber(props.basketNumber - 1);
  };

  const removeCats = () => {
    props.setBasket([]);
    props.setTotalPrice(0);
    props.setBasketNumber(0);
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
              <BasketImage src={props.basket[index][2]}/>
              <BasketPrice>Price: £{props.basket[index][1]}</BasketPrice>
              <BasketDelete onClick={() => deleteItem(index)}>Delete</BasketDelete>
            </BasketItem>
          );
        })}

        <TotalAmount>Total price: £{props.totalPrice.toFixed(2)}</TotalAmount>
        <CheckoutButton onClick={removeCats}>Proceed to Checkout</CheckoutButton>
      </Wrapper>
    </div>
  );
};

export default Basket;
