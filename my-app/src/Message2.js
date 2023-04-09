// import React  from "react";
// import { useState } from 'react';

// function Msg2({message}){

//     let [msg, setCount] = useState(message);
//     let handleClick = function () {
//         setCount("Thanks for subcribe")
//     }


//     return  (
//         <div>
//             <h1>{msg}</h1>
//             <button onClick={handleClick}>Subcribe</button>
//         </div>
        
//     )}

// export default Msg2

import React from "react";
import { useState } from "react";


function Msg2 ({message}){
    let [msg, setCount] = useState(message);
    

   let handleClick = ()=>{
        setCount("thanks for subscribing our channel")
    }

    return <div>
        <h1>{msg}</h1>
        <button onClick={handleClick}>Click to cubscribe</button>
    </div>

}
export default Msg2;