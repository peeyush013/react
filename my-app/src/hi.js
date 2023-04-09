import React from "react";


let Hello = function (){
	// return 
	// <div className="hw">
	// 	<h1>hey world </h1>
	// </div>


	//// behind the scenes <div> ,<h1> and other element are created by React.createElement
	// return React.createElement(
    //     'div',
    //     {className:"one"},
    //     React.createElement('h1', null, "Hello World")
    // )

	return React.createElement('div',{className:"hw"},React.createElement('h1',null,'hey world'))
	
}

export default Hello;