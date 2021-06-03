import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Arif', 'Mujib', 'Karim', 'Habu', 'Jabu', 'Kabu'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.80'},
    {name: 'PDF Reader', price: '$6.88'},
    {name: 'Premium El', price: '$249.99'} 
  ]
    return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p> 
        <Counter></Counter>
        <Users></Users>

        <ul>
         { 
         nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}> </Product>)
        }

        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */}

        <Person name = "Karim" job = "football"></Person>
        <Person name = "Farim" job = "Kisuna"></Person>
      </header>
    </div>
  );
}

//state
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  //const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h2>Count: {count} </h2>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}

//dynamic data lode
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle = { 
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style = {productStyle}>
      <h3> {name} </h3>
      <h2> {price} </h2>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  return(
    <div style= {{border: '2px solid white', width: '400px'}}>
    <h3>My Name: {props.name} </h3>
    <p>My Profession: {props.job}</p>
    </div>
  )

}


export default App;
