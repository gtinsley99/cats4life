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
import Modal from "./components/modal/Modal";

function App() {
  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prices, setPrices] = useState([]);
  const [location, setLocation] = useState([]);
  const [name, setName] = useState([]);
  const [basketNumber, setBasketNumber] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [baskIndex, setBaskIndex] = useState([]);
  const [showModal, setShowModal] = useState(false);

  FakerPrice(setPrices);
  FakerLocation(setLocation);
  FakerName(setName);
  Catsapi(setCats);

  // Show navbar on scrollup, hide on scrolldown
  let prevScrolllPos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrolllPos > currentScrollPos || currentScrollPos < 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    prevScrolllPos = currentScrollPos;
  };

  return (
    <div className="App">
      {showNav ? <Navbar setShow={setShow} basketNumber={basketNumber} /> : ""}
      <Title />
      {showModal ? <Modal setShowModal={setShowModal}/> : ""}
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
        setShowNav={setShowNav}
        baskIndex={baskIndex}
        setBaskIndex={setBaskIndex}
      />
      {show ? (
        <Basket
          setShow={setShow}
          basket={basket}
          setBasket={setBasket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          name={name}
          setName={setName}
          location={location}
          setLocation={setLocation}
          price={prices}
          setPrice={setPrices}
          cats={cats}
          setCats={setCats}
          basketNumber={basketNumber}
          setBasketNumber={setBasketNumber}
          baskIndex={baskIndex}
          setBaskIndex={setBaskIndex}
          setShowModal={setShowModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
