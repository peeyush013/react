import React,{Component} from "react";

class EventBind extends Component {

constructor(){
	super()
	this.state = {message:"hello"}
}

ClickH = () => {
	this.setState({
		message: "Bye Bye"
	})
}


	render (){
		return <div>
			<div>{this.state.message}</div>
			
			<button onClick={this.ClickH}>click here </button>
		</div>
	}
}
export default EventBind;