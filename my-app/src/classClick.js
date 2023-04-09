import React,{Component} from "react";

class ClassClick extends Component {
	onClickHandler(){
		console.log("no of times button in clicked")
	}

	render(){
		return <div>
			<h1>heya</h1>
			<button onClick={this.onClickHandler}>click here</button>
		</div>
	}
}
export default ClassClick;