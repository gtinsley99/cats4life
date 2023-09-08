import styled from "styled-components";


const primaryColor = "#ffc8c8";
const secondaryColor = "lightblue";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90vw;
  border: 3px solid black;
  margin: 20px;
  background-color: ${primaryColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  margin: 20px;
  padding: 5px;
  max-height: 1000px;
  overflow-y:auto;
  overflow-x:hidden;
  font-size: 20px;
  background-color: white;
  border-radius: 5%;
  box-shadow: 1px 2px;
  width: 30%;
  min-width: 250px;
  max-width: 500px;
  transition: 0.5s;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: row;
  justify-content: center;
  padding: 10px;
  font-size: 18px;
  margin: 20px;
  background-color: ${secondaryColor};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${primaryColor};
  }
`;

export const Para = styled.p`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid grey;
`;
