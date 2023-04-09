
// 1 Import the React and React DOM libraries
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './app';



// Get the reference of div with id root
const e1 = document.getElementById('root');

// Tell react to take control of root element
const root = ReactDOM.createRoot(e1)

// Creating a component 
// jsx
// function App() {
//   return <h1> hello </h1>
// }

// function App(){


//   let info = {
//     firstName:"ram",
//     lastName:"dani"
//   }


//   return <h1>{info.firstName+info.lastName}</h1>
// }

// function App(){

//    let message  = false
//    if (message) {
//      return <h1>All good</h1>
//    }
//    else {
//      return <h1>Keep Working</h1>
//    }
// }

// function App() {
//   // let canDrive = true
//   // let canDrive = {firstName:"Hanif",lastName:"Jamadar"}
//   // let canDrive = ["Sarka", "Hanif", "mayuri"]
//   // let canDrive = [1,2,3]
//   // let date = new Date()
//   // let time = date.toLocaleDateString()
//   // return <h1>{time}</h1>

//   // let canDrive = true    // will not show boolean value on ui
//   //let canDrive = { firstName: "Hanif", lastName: "Jamadar" }  // will not show object values on ui
//    //let canDrive = ["Sarka", "Hanif", "mayuri"]  // will show array values 
//   //  let canDrive = [1,2,3]    // will show array values
//  // return <h1>{canDrive}</h1> 
 
//   let date = new Date()  // will not show on ui
//   let time = date.toLocaleDateString()  // react library convert and give present date
//   return <h1>{time}</h1>     

// }

// function App (){
//   // program 4
//   let inputType = "number"
//   let x = 5
//   let y = 10
//   return <input  classname = "hello"  type={inputType} min= {x} max={y}/>
// }


// Show the component to the screen

root.render(<App />)


// ques - why we use classname = "hello"