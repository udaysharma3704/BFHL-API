const express = require("express")
const cors = require("cors")
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

const healthRoutes = require("./src/routes/healthRoutes");
const bfhlRoutes = require("./src/routes/bfhlRoutes");


app.use("/health", healthRoutes);
app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => {
  res.send("Hello World")
});

app.listen(PORT, ()=> {
  console.log("Server running on port" + PORT);
})