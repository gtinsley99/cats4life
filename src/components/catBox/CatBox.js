import {faker} from "@faker-js/faker";
import {Wrapper, Content} from "./CatBox.styles";

const CatBox = (props) => {
    return (
      <Wrapper>
          {props.cats.map((item, index) => {
            return (
              <Content key={index} value={index}>
                <p>Name: {faker.person.firstName()}</p>
                <p>Price: £{faker.commerce.price({min: 20, max: 30})} </p>
                <p>Location: {faker.location.country()}</p>
                    <img src={item.url} width="500px" height="300px"/>
              </Content>
            );
          })}
      </Wrapper>
    );
  };

export default CatBox;