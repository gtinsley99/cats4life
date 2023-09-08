import "./App.css";
import { useState } from "react";

// components
import Basket from "./components/basket/Basket";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import CatBox from "./components/catBox/CatBox";
import Catsapi from "./components/catsapi/Catsapi";
import FakerPrice from "./components/fakerData/FakerPrice";
import FakerLocation from "./components/fakerData/FakerLocation";
import FakerName from "./components/fakerData/FakerName";
import FavCats from "./components/favCats/FavCats";

function App() {
  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prices, setPrices] = useState([]);
  const [location, setLocation] = useState([]);
  const [name, setName] = useState([]);
  const [basketNumber, setBasketNumber] = useState(0);
  const [images, setImages] = ([]);

  FakerPrice(setPrices);
  FakerLocation(setLocation);
  FakerName(setName);
  Catsapi(setCats);

  return (
    <div className="App">
      <Navbar setShow={setShow} basketNumber={basketNumber}/>
      <Title />
      <FavCats 
        cats={cats}
        images={images}
        setImages={setImages}
        name={name}
      />
      <CatBox
        cats={cats}
        basket={basket}
        setBasket={setBasket}
        setShow={setShow}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        price={prices}
        location={location}
        name={name}
        basketNumber={basketNumber}
        setBasketNumber={setBasketNumber}
      />
      {show ? (
        <Basket
          setShow={setShow}
          basket={basket}
          setBasket={setBasket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          name={name}
          price={prices}
          cats={cats}
          setCats={setCats}
          basketNumber={basketNumber}
          setBasketNumber={setBasketNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
