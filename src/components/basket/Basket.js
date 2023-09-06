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
} from "./Basket.styles";

const Basket = (props) => {
  const closeBasket = () => {
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
              <BasketName>Name: {item.name}</BasketName>
              <BasketImage>{item.url}</BasketImage>
              <BasketPrice>Price: {item.price}</BasketPrice>
            </BasketItem>
          );
        })}

        <TotalAmount>Total: £{props.totalPrice.toFixed(2)}</TotalAmount>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </Wrapper>
    </div>
  );
};

export default Basket;
