import { Wrapper, Cont, Paragraph } from "../favCats/FavCats.styles";
import { useState } from "react";


const FavCats = (props) => {

    const [cats, setCats] = useState([]);


    return(
        <Wrapper>
            {props.cats.map((items, index) => {
                 if (index < 3) {
                    return(
                        <Cont key={index}>
                        <Paragraph>Name: {props.name[index]}</Paragraph>
                        <Paragraph>Breed: {items.breeds[0].name}</Paragraph> 
                        <img src={items.url} className="photos" />
                         </Cont>
                    )
                }
            })
            }
        </Wrapper>        
    );
}


export default FavCats;