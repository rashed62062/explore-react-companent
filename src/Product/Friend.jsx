import React from 'react'

export default function Friend({friend}) {
    const { id,name, email, address:{city}} = friend;
  return (
    <div className='box'>
        <h2> Id  : {id}</h2>
        <h4>Name : {name}</h4>
        <p>Email : {email}</p>
        <p>City  : {city}</p>
       
        
        </div>
  )
}



// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"