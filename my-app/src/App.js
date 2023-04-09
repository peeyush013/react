
// function App(){
//     const a = {
//         border: '1px solid black',
//         backgroundColor: 'red',
//         color:'blue'
	
//     };
//     return  (<div>
//         <h1>Hi i am learning js ..</h1>
//            <div style = {a}>
//                 <h1>fN:Chinmay</h1>
//                 <h1>lN:Deshpande</h1>
//             </div>
//             <div style = {a}>
//                 <h1>fN:Sarika</h1>
//                 <h1>lN:Pansare</h1>
//             </div>
//             <div style = {a}>
//                 <h1>fN:Ram</h1>
//                 <h1>lN:Sharma</h1>
//             </div>

//     </div>)
// }

// function App (){

//     const x = {
//         color :"green",
//         backgroundColor:"blue"
//     }

//     return <div>
//         <h1 style={x}> my name is aish</h1>
//         <h1 style={x}> i am pagal</h1>
//     </div>
// }

// export default App;


// import Card from "./card";
// function App (){
   

//     return (<div>
//             <Card firstName ="chinmay" lastName ="deshpande"/>
//             <Card firstName ="poorva" lastName ="vyas"/>
//             <Card firstName ="sarika" lastName ="pansare"/> 

//     </div>)
      
// }

// export default App;

// import Info from "./card";

// function App (){

//     return <div>

//         <Info  fn="peeyush" ln="sharma"/>

//     </div>
// }
// export default App;


import Hello from "./hi";
import WelcomeHome from "./welcome";
import Greet from "./greet";
import Heya from "./hello2";
import Welcome2 from "./Welcome2";
import Info2 from "./Info2";
import Msg from "./Message";
import Msg2 from "./Message2";
import ClassClick from "./classClick";

import EventBind from "./eventBind";




function App (){
    



    return <div>
        
        <WelcomeHome/> 
        <Hello/>
        <Greet firstName="ankur" skill="react"/>
        <Heya/>
        <Welcome2/>
        <Info2 firstName = "anuj" lastName="sharma" age = "20"/>
        
        <Msg message = "hey welcome"/>
        <Msg2 message = "have a great day"/>
        <ClassClick/>
        <EventBind/>
        
       </div>
     
}
export default App;

