import './App.css';
import { useState} from 'react';

// components
import Basket from './components/basket/Basket';
import Navbar from './components/navbar/Navbar';
import Title from './components/title/Title';
import CatBox from './components/catBox/CatBox';
import Catsapi from './components/catsapi/Catsapi';



function App() {

  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);

 Catsapi(setCats);

  

  return (
    <div className="App">
      <Navbar />
      <Title />
      <CatBox  />
      <Basket />
    </div>
  );
}

export default App;
