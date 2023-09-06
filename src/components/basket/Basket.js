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

const Basket = ({ setShow, basket }) => {
  const closeBasket = () => {
    setShow(false);
  };

  return (
    <div>
      <Wrapper>
        <CloseButton onClick={closeBasket}>Close Basket</CloseButton>
        <BasketOrder>Your order:</BasketOrder>
        {basket.map((item, index) => {
          return (
            <BasketItem key={index}>
              <BasketName>Name: {item.name}</BasketName>
              <BasketImage>{item.url}</BasketImage>
              <BasketPrice>Price: {item.price}</BasketPrice>
            </BasketItem>
          );
        })}

        <TotalAmount>Total:</TotalAmount>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </Wrapper>
    </div>
  );
};

export default Basket;
