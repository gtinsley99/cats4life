import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 100%;
  position: fixed;
  overflow: scroll;
  right: 0;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  width: 19%;
  height: 60px;
  position: fixed;
  top: 1;
  background-color: #ff9933;
  color: white;
  font-weight: bold;
  border: none;
  transition: 0.4s linear;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #e67300;
    border: 1px solid #e67300;
  }
`;

export const BasketOrder = styled.p`
  font-size: 20px;
`;

export const BasketName = styled.p`
  font-size: 18px;
`;

export const BasketImage = styled.img`
  width: 95%;
  height: 15%;
`;

export const BasketPrice = styled.p`
  font-size: 18px;
`;

export const BasketItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalAmount = styled.p`
  font-size: 18px;
`;

export const CheckoutButton = styled.button`
  width: 20%;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #00ffff;
  color: white;
  font-weight: bold;
  overflow: hidden;
  transition: 0.4s linear;
  border: none;
  font-size: 20px;
  font-family: "Paytone One", sans-serif;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ff66ff;
    border: 1px solid #ff66ff;
  }
`;
