const fs = require("node:fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

// const pageInfo = (req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Users</title><head>");
//     res.write("<body>");
//     res.write("<h1>hello</h1>");
//     res.write(
//       '<form action="/create-user" method="POST"><input type="text" name="user" /><button type="submit">Send</button></form>'
//     );
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/users") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title><head>");
//     res.write("<body>");
//     res.write("<ul>");
//     res.write("<li>1</li>");
//     res.write("<li>2</li>");
//     res.write("<li>3</li>");
//     res.write("<li>4</li>");
//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/create-user" && method === "POST") {
//     const body = [];

//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     req.on("end", () => {
//       const parseBody = Buffer.concat(body).toString();
//       console.log(parseBody);
//       res.statusCode = 302;
//       res.setHeader("Location", "/");
//       return res.end();
//     });
//   }
// };

// module.exports = pageInfo;
