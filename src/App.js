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

function App() {
  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prices, setPrices] = useState([]);
  const [location, setLocation] = useState([]);
  const [name, setName] = useState([]);
  
  FakerPrice(prices, setPrices); 
  FakerLocation(location, setLocation);
  FakerName(name, setName);
  Catsapi(setCats);
 

  return (
    <div className="App">
      <Navbar />
      <Title />
      <CatBox
        cats={cats}
        basket={basket}
        setBasket={setBasket}
        setShow={setShow}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        price = {prices}
        location = {location}
        name = {name}
      />
      {show ? (
        <Basket setShow={setShow} basket={basket} totalPrice={totalPrice} name={name} price={prices} cats={cats}/>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
