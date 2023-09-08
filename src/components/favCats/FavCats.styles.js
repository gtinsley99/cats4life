import styled from "styled-components";

const primaryColor = "#e6b3ff";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 30vw;
    min-width:300px;
    padding: 20px;
    border: 3px solid black;
    margin: 20px;
    background-color: ${primaryColor};
`;

export const Cont = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  margin: 10px;
  padding: 5px;
  font-size: 20px;
  background-color: white;
  border-radius: 5%;
  box-shadow: 1px 2px;
  width: 80%;
  min-width: 250px;
  max-width: 500px;
  transition: 0.5s;
`;

export const Paragraph= styled.p`

`;

