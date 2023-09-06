import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90vw;
  border: 3px solid black;
  margin: 20px;
  background-color: #FFC8C8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  margin: 20px;
  padding: 5px;
  font-size: 20px;
  background-color:white;
  border-radius: 5%;
  box-shadow: 1px 2px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 18px;
  margin: 20px;
  background-color: lightblue;
  transition: 0.5s;
`;

export const Para = styled.p`
  font-size: 20px;
`;


export const Image = styled.img`
  width:500px;
  height:300px;
  border: 1px solid grey;
`;
