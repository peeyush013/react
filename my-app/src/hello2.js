import React from "react";
let heya = function (){
	// return <div className="heyclass">
	// 	<h1>hey this is function component</h1>
	// </div>


	// why we import react if we dont use because behind the scenes this happened
	return React.createElement('div',{className:"heyclass"},React.createElement,('h1',null,'hey this is function component'))
}

export default heya;