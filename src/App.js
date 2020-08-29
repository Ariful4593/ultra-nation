import React, { useState, useEffect } from 'react';
import './App.css';
import List from './component/List/List';
import Cart from './component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
    .catch(error => console.log(error))
  },[])
  const handleAddCountry = (country) =>{
    // console.log("Country Added.", country);
    const newCart = [...cart, country];
    setCart(newCart)
  }
  return (
    <div>
      <h1>Country loaded: {countries.length}</h1>  
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(x => <List handleAddCountry={handleAddCountry} country ={x} key={x.alpha3Code}></List>)
      }         
    </div>
  );
}
export default App;
