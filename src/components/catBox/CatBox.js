import {faker} from "@faker-js/faker";

const CatBox = (props) => {
    return (
      <div>
          {props.cats.map((item, index) => {
            return (
              <div key={index} value={index}>
                <p>Name: {faker.person.firstName()}</p>
                <p>Price: £{faker.commerce.price()} </p>
                <p>Location: {faker.location.country()}</p>
                    <img src={item.url} width="500px" height="300px"/>
              </div>
            );
          })}
      </div>
    );
  };

export default CatBox;