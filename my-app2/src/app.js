
// for showig on ui we import usestates
import { useState } from "react";
function Application () {

 
 let [count,setCount]= useState(0)
    
    let handleClick = function () {
        count = count+1
        setCount(count)
		console.log(count)
		console.log("button is clicked")
    }

    return (
        <div>
            <button onClick={handleClick}>Count attempt</button>
            <div>No of attempt = {count}</div>
        </div>
    )


}

export default Application;




// problem here is , count is not showing on ui 
// function Application () {

//     let count = 0 ;

//     let handleClick = function () {
//         count = count + 1
//         console.log(count)
//         console.log("button is clicked")
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Count attempt</button>
//             <h1>No of attempt:</h1>
//         </div>
//     )
// }

// export default Application;