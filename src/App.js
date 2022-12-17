import React, {useEffect, useState, useStatment} from "react";
import axios from 'axios';
import './App.css';


function App() {
  const [price, setPrice] = useState(0);

  const getPrice = () => {
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-EUR/spot")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        setPrice(res.data.data.amount);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="App">
      <h1>Bitcoin price</h1>
      <h3>€{price}</h3>
    </div>
  );
}

export default App;
