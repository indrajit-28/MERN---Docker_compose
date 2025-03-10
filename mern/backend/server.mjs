import express from "express";
//const express = require("express");
import cors from "cors";
//const cors = require("cors"); 
import records from "./routes/record.js";
//const records = require("./routes/record.js");


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
