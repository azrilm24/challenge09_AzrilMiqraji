const path = require("path");
const fs = require("fs");
const os = require("os");
const http = require("http");
const moment = require("moment");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));
// console.log(path.join(__dirname, "test", "hello.txt"));

//membuat folder
//path, nama folder
// fs.mkdir(path.join(__dirname, "/test2"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder berhasil terbuat");
// });

//membuat sebuah file
//path, nama file, isi file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello sanber",
//   (err) => {
//     if (err) throw err;
//     console.log("File berhasil dibuat");
//   }
// );

//membaca isi file
//path filenya, format file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// merubah nama file
// path file yang akan dirubah, path nama barunya
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "hello-sanber.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("Berhasil merubah nama file...");
//   }
// );

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.uptime());

// const server = http.createServer((req, res) => {
//   res.write("hello sanber3");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server running in port 3000");
// });

const now = moment();
// console.log(now);
console.log(now.format("DD-MM-YYYY HH:mm:ss"));
const tujuhHariSetelahnya = moment().add(7, "days");
console.log(tujuhHariSetelahnya.format("DD-MM-YYYY HH:mm:ss"));

http
  .createServer((req, res) => {
    res.write("hello sanber3");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server running in port 3000");
  });
