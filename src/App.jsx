import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './assets/Book'
import Count from './Count'
import Cons from './Product/Cons'
import Team from './Product/Team'
import Users from './Product/Users'
import Friends from './Product/Friends'

function App() {

  function handleClick() {
   
    alert('button clicked');
    
  }
    const  handle2 = () => {
      alert('button 2 clicked')
    
  }

  const addToFive =(num) => {
    alert(num + 5);
    
  }

//  const books =[
//   {id:1, name: 'physic', price:100},
//   {id:3, name: 'Math', price:200},
//   {id:4, name: 'English', price:600},
//   {id:5, name: 'Bangla', price:100},
//  ]



  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
     <Cons></Cons>
    <Count></Count>
    {/* <Book books={books}></Book> */}


  
      <h1>Vite + React</h1>
      <button onClick={handleClick}> Click me</button>
      <button onClick={handle2}> click 2</button>

      {/*    
anonymous  */}
<br/>
       <button onClick={()=>{alert('third-clicked')}}> Third</button>
       <button onClick={() => addToFive(5)}> four</button>
      
    </>
  )
}

export default App
