import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
  
function Pizza(props) {
  // if (props.pizzaObj.soldOut) {
  //   return null;
  // }
    return (
      <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>
            {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
          </span>
        </div>
      </li>
    );
}
function App(){
    return (
        <>
            <Headder />
          <div className="container">
            <Menu />
            <Footer />
          </div>
        </>
    )
}
function Headder(){
  return (
    <header className="header">
      <h1 >Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu(){
  return (
    <React.Fragment>
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone
        oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
    </React.Fragment>
  );
}
function Footer(){
  return (
    <footer className="footer">
      <div className='order'>
      <p>
      it's {new Date().toLocaleTimeString()}, and we are currently open
      </p>
      <button className='btn'>Order Now</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>);
