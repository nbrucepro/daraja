const express = require("express");

const app = express();
const cors = require("cors");

const TokenRoute = require("./routes/token");
const CallbackRoute = require("./routes/callback")

app.listen(5000, () => {
  console.log("Server is running at 5000");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mpesa programming in progress,Time to get paid");
});

app.use("/token", TokenRoute);
app.use("/app",CallbackRoute)
