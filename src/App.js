import "./App.css";
import { useState } from "react";

// components
import Basket from "./components/basket/Basket";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import CatBox from "./components/catBox/CatBox";
import Catsapi from "./components/catsapi/Catsapi";

function App() {
  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
 

  Catsapi(setCats);
  console.log(cats);

  return (
    <div className="App">
      <Navbar />
      <Title />
      <CatBox cats={cats} basket={basket} setBasket={setBasket} setShow={setShow} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
      {show ? <Basket setShow={setShow} basket={basket} totalPrice={totalPrice} /> : ""}
    </div>
  );
}

export default App;
