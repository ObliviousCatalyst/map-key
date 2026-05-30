import http from "node:http"
import fs from "node:fs"

const html = fs.readFileSync("./map-key-MEDINC.html", (err,file) => {
	if(err) {
		throw err
	}
	return file
})

const server = http.createServer((req, res) => {
	res.setHeader("Content-type", "text/html")
	res.write(html)
	res.end()
})

server.listen(25565,"127.0.0.1", () => {
	console.log("server running")
})
