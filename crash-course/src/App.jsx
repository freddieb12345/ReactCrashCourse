import './css/App.css';
import React from 'react';
//import Joke from './components/Joke';
//import Header from './components/Header';
// import MyInfo from './components/MyInfo.jsx'
// import Footer from './components/Footer.jsx'
// import ToDoItem from './components/ToDoItem';
//import "./css/ToDo.css"
//import ContactCard from './components/ContactCard';
//import jokesData from "./data/jokesData"
import productsData from "./data/products"
import Product from './components/product';

function App() {
  //const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
  const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)
  return (
    <div>
      {productComponents}
    </div>
  );
}

export default App;
