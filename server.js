const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const cartItems = require("./routes.js");
const port = 1212;
app.use("/", cartItems);

app.get("/", (request, response) => {
  response.send("oi!");
});

app.listen(port),
  () => {
    console.log(`listening on port ${port}`);
  };
