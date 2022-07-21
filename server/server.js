import express from "express";
import { readFile } from "fs";
import cors from "cors";

const app = express();
//const port = process.env.PORT || 5000;
const port = 5000;

app.use(cors());
// app.use(json());
// app.use(urlencoded({ extended: true }));

// // API calls
// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

app.get("/one-piece-data", (req, res) => {
  readFile("./one-piece-data.json", "utf8", (err, data) => {
    if (err) throw err;
    const movies = JSON.parse(data);
    res.send(movies);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});

// app.listen(port, () => console.log(`Listening on port ${port}`));
