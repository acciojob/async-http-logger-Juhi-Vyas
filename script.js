async function getdata() {
	let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(data=> console.log(res.data))
}

getdata()