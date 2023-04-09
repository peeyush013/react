function Information ({firstName,lastName,age,rollNo}){

	const styling = {
		color: "blue",
		backgroundColor: "black",
		border: "1px solid black"
	}

	return <div>
		<h1 > {firstName} {lastName}</h1>
		<h1 style={styling}> {age}</h1>
		<h1 style={styling}> {rollNo}</h1>
	</div>
}
export default Information;