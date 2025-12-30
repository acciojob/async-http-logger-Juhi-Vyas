let res = fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(data => {window(consoleLog(res.data))})
