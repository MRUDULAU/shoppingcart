// 3 ways to create component in react 1.function 2.class 3.arrow



// function App()
// {
//   return(
//     <h1>function component-mrudula</h1>
//   )
// }
// export default App

//2nd method class way of creating react component

/*import React from "react"
 class App extends React.Component
 {
  render(){
    return(
      <h1> class component -by mrudula</h1>
    )
  }
 }
 export default App*/

 // 3 method arrow function
//()=>{} const let var are three variable
// JSX-----1. wrapping 2.fragment 3.fragment braces
/*import Fate from "./skills"
let App=()=>{
  return(
    <>
    <h1> arrow function -my favourite</h1>
    <img src="https://source.unsplash.com/random/100*100/?puppy" alt="puppy"/>
    <hr></hr>
    <h3> About me</h3>
    <p> i am crazy coder from sahyadri 3IS A sec</p>
    <Fate/>
    <Fate/>
    </>
  )
}
export default App*/

//understanding state
/*import {useState} from "react"//1st change for using hooks(useState)
function App()
{
  //2nd created a hook (two-variables,method)
  const [val,setVal]=useState('https://source.unsplash.com/random/200*200/?cat')
  
  const change=()=>{
    setVal('https://source.unsplash.com/random/200*200/?puppy')
  }
  return(
    <>
    <h2> Mrudula Profile</h2>
    <img src={val} alt="cat image"/>
    <button onClick={change}>change</button>
    </>

  )
}
export default App*/

//understanding props
/*import Twostar from "./twostar"
function App(){
  const ss={
    name:"Shreya",
    place:'Karwar',
    star:'star'
  }
  const ps={
    name:"Jeevitha",
    place:'manglore',
    star:'powerstar'
  }
return(
  <>
  <h1> Star Student Detail of ISE 3A</h1>
  <h3>Shreya</h3>
  <p>from Karwar</p>
  <hr></hr>
  <Twostar ss={ss}/>
  <Twostar ps={ps}/>
   
  </>
)
}
export default App*/

// forms -----> 2ways controlled and uncontrolled (useRef) way
/*function App(){
  const submit=()=>{
    alert("data submitted")
  }
  return(
    <>
    <h1>form demo</h1>
    <hr></hr>
    <form onSubmit={submit}>
      <label>Name</label>
      <input type="text" name="name" />
      <button>sumbit</button>
    </form>
    </>
  )
}
export default App*/
//App.js
import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';
import Img from './watch.png';
import Img2 from './belt.png';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="content">
      <div className='product-heading'>
          <h2>Products</h2>
          </div>
        <div className="product-list">
          
          
          <Product id={1} name="Watch" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Belt" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />

          <Product id={1} name="Watch" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Belt" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <Cart items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  );
}
export default App;