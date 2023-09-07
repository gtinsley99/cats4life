import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 100%;
  position: fixed;
  right: 0;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  width: 100%;
  height: 10%;
  background-color: #ff9933;
  color: white;
  font-weight: bold;
  overflow: hidden;
  transition: color 0.4s linear;
  transition: background-color 0.4s linear;
  padding: 10px;
  border: 1px solid #ff9933;
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
  width: 100%;
  height: 11%;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #00ffff;
  color: white;
  font-weight: bold;
  overflow: hidden;
  transition: color 0.4s linear;
  transition: background-color 0.4s linear;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #00ffff;
  font-size: 20px;
  font-family: "Paytone One", sans-serif;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ff66ff;
    border: 1px solid #ff66ff;
  }
`;
