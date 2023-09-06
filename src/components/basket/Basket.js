import "./Basket.styles";
import { faker } from "@faker-js/faker";
import { Wrapper, CloseButton, BasketOrder,BasketName, BasketImage, BasketPrice, CheckoutButton, TotalAmount } from './Basket.styles'



const Basket = (props) => {
    return (
        <div>
            <Wrapper>
                <CloseButton>Close Basket</CloseButton>
                <BasketOrder>Your order:</BasketOrder>
                <BasketName>Name:</BasketName>
                <BasketImage></BasketImage>
                <BasketPrice>Price:</BasketPrice>
                <TotalAmount>Total:</TotalAmount>
                <CheckoutButton>Proceed to Checkout</CheckoutButton>
            </Wrapper>
        </div>
    );
};

export default Basket;