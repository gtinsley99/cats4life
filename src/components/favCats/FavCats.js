import { Wrapper, Cont, Paragraph } from "../favCats/FavCats.styles";

const FavCats = (props) => {
  return (
    <Wrapper>
        <h1>Cats of the Week</h1>
      {props.catsOfTheWeek.map((items, index) => {
          return (
            <Cont key={index}>
              <Paragraph>Name: {items[0]}</Paragraph>
              <img src={items[1]} className="photos" />
            </Cont>
          );
        
      })}
    </Wrapper>
  );
};

export default FavCats;
