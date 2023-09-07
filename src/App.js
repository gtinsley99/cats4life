import "./App.css";
import { useState } from "react";

// components
import Basket from "./components/basket/Basket";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import CatBox from "./components/catBox/CatBox";
import Catsapi from "./components/catsapi/Catsapi";

import FakerPrice from "./components/fakerData/FakerPrice";

function App() {
  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prices, setPrices] = useState([]);

  Catsapi(setCats);
  
  FakerPrice(setPrices, prices);

  return (
    <div className="App">
      <Navbar />
      <Title />
      <CatBox cats={cats} basket={basket} setBasket={setBasket} setShow={setShow} totalPrice={totalPrice} setTotalPrice={setTotalPrice} price={prices}/>
      {show ? <Basket setShow={setShow} basket={basket} totalPrice={totalPrice} /> : ""}
  
    </div>
  );
}

https://prod.liveshare.vsengsaas.visualstudio.com/join?59078F70723DD605EEE0A25FF00D84717281

export default App;
