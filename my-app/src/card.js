// function Card({firstName,lastName}) {


//     const b = {
//         border: '1px solid black',
	    
//     };
	
//     return (<div style={b}>
//         <h1>fN:{firstName}</h1>
//         <h1>lN:{lastName}</h1>
//     </div>)
// }
// export default Card;

function Info ({fn,ln}){

    return <div>
        <h1> my  first name is {fn}</h1>
        <h1> my last name is {ln}</h1>
    </div>
}
export default Info;