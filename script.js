async function getdata() {
	let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
	console.log(res.data)
}