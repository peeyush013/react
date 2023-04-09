// step 1 - importing libraries

import  React from 'react';
import ReactDom from 'react-dom/client';
import HardCodeInfo from './component1';
import MyInformation from './myInfo';
import App from './app';



// step 2 - get the reference of div with id root
const element1 = document.getElementById('root')


// step 3 - giving control to react
const root = ReactDom.createRoot(element1)

root.render(<App/>)
// creating component

// function Multiply(){
// 	return <h1> this is my first class</h1>
// }

// step4 - creating components (jsx)

// // program 1 - showing text on ui
// function Application (){
//     return <h1> hey its my first code of react</h1>
// }


// program 2 

// function Application (){
    
//     let studentInfo = {
//         firstName :"ankur",
//         lastName: "deswal"
//     }


//     return <h2>{studentInfo.firstName}{studentInfo.lastName} </h2>
// }



// function Application(){
//     let canDrive = yes ;
//     return <h1>{canDrive}</h1>     // will not return boolean variable
// }

// function Application(){
//     let canDrive = {
//         fullName1 :"ankurDeswal",
//         fullName1 :"palashSharma",
//     }   
    
//     return <h1> {canDrive}</h1>   // will not show any results , we have to return values
//  }

// function Application(){
//     let canDrive = ["anurDeswal ","26 ","delhi"]
  
    
//     return <h1> {canDrive}</h1>   // will  show any results 
// }


//  function Application(){
//  	 let date = new Date ()
//  	 let time = date.toLocaleDateString()   // will show current date on ui

//  	 return <h1>{time}</h1>
//  }



// function Application(){

// 	return <input />    // will create input box on ui
// }


// function Application(){

// 	let inputType = 'text'

// 	return <input type={inputType}/>    // will create input box on ui and we can type any text number etc.
// }

// function Application(){

// 	let inputType = "number"

// 	return <input type={inputType} />    // will create input box on ui and we only can type any number
// }

// using min max

// function Application(){

// 	let inputType = "number"
// 	let minimumNumber = 0
// 	let maximumNumber = 9

// // user can only type number from 0-9 only
// 	return <input type={inputType} min={minimumNumber} max={maximumNumber}/>    
// }


// function Application(){

// 	let inputType = "number"
// 	let minimumNumber = 0
// 	let maximumNumber = 9
// 	let oddNumber=[1,3,5,7]
// 	let evenNumber =[0,2,4,,6,8]

	
// 	return <div>
// 		 <input type={inputType} min={minimumNumber} max={maximumNumber}/> 
// 		 <h1>{oddNumber}</h1>
// 		 <h1>{evenNumber}</h1>
// 	</div>
	  
// }



// last step - rendering 
// root.render(<Application />)



// day two 


//root.render(<Application/>)
//root.render(<HardCodeInfo />);
//root.render(<Multiply/>)
//root.render(<MyInformation/>)
root.render(<App/>)

