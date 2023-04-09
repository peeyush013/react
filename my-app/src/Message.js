 

// import React , {Component} from 'react'

// class Msg extends Component {

//     constructor(abc){
//         super(abc)
//         this.state = {
//             message:abc.message
//         }

//     }
//     changeMessage(){
        
//         //this.state.message = "Thank you for subcribe"
//         //console.log(this.state.message)

//         this.setState({
//             message:"Thank for Subcribing..."
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.changeMessage()}>Subcribe</button>
//             </div>
            
//         )
//     }

// }

// export default Msg

import React,{Component} from "react";
class Msg extends Component{

    constructor(cns){
        super(cns)
        this.state = {message:cns.message}
    }
    changeMessageState(){
        this.setState({message:"hey thank you for subscribing"})

    }


    render(){
        return(
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={()=> this.changeMessageState()}> Subscribe for free</button>
            </div>
        )
    }
}
export default Msg;