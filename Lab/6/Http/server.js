const http = require("http");
const { readFileSync } = require("fs");
const EventEmitter = require("events");
const os = require("os");
const Path = require("path");

const event = new EventEmitter();
const login = readFileSync("./index.html");
const server = http.createServer();
server.on("request", (req, res) => {
  const url = req.url;
  if (url === "/login") {
    res.writeHead(200, { "context-type": "/text/html" });
    res.write(login);
  } else if (url === "/osmod") {
    res.writeHead(200, { "context-type": "/text/plain" });
    const s =
      "Free Memory:" +
      os.freemem() +
      "\n" +
      "Total Memory:" +
      os.totalmem() +
      "\n" +
      "Architecture:" +
      os.arch(); //+"Host Name:"+os.host()
    res.write(s);
  } else if (url === "/pathmod") {
    const k = "D:wp -6612lab9.js";
    res.write(Path.dirname("D:/wp -6612/lab4.js"));
    res.write(Path.extname("lab.js"));
    res.write(Path.basename("D:/wp -6612/lab4.js"));
  } else {
    res.writeHead(404, { "conext-type": "/text/html" });
    res.write("<h1>Page Not Found</h1>");
  }
  res.end();
});
server.listen(8083);
