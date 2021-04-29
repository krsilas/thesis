const http = require("http");
const port = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    const url = req.url;
    if (req.url === "/coordinates") {
			const time = Date.now()
			const randomNumber = Math.random() * 100
      const payload = {
        x: time,
				y: randomNumber
      };
      res.write(JSON.stringify(payload));
    }
		res.end()
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });