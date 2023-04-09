import Information from "./info";
// returning hard code elements

// function HardCodeInfo (){

// 	return <div>

// <h1>hi , this is first class of react</h1>
// <h1> fn: pee</h1>
// <h1>ln : Sharma</h1>

// </div>
// }

// returning hard code elements with styling
// function HardCodeInfo() {

// 	const styling = {
// 		color: "blue",
// 		backgroundColor: "black",
// 		border: "1px solid black"
// 	}

// 	return <div>

// 		<h1 style={styling}>hi , this is first class of react</h1>
// 		<h1 style={styling}> fn: pee</h1>
// 		<h1 style={styling}>ln : Sharma</h1>

// 	</div>
// }

// returning dynamic elements withstyling
// function HardCodeInfo() {

// 	const styling = {
// 		color: "blue",
// 		backgroundColor: "black",
// 		border: "1px solid black"
// 	}
	

// 	return <div>

// 		<h1 style={styling}>hi , this is first class of react</h1>
// 		<h1 style={styling}> fn: pee</h1>
// 		<h1 style={styling}>ln : Sharma</h1>

// 	</div>
// }

function HardCodeInfo(){

		
		
	
		return (<div>
			<Information firstName="dilip"  lastName ="chaudhary"/>

			<Information age="30" />
			<Information rollNo="11"/>
		</div>)
	}



// exporting the component
export default HardCodeInfo;