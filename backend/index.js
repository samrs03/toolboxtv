const express = require("express");
const cors = require("cors");
const functions = require("./functions/functions");
const app = express();

app.use(cors());


app.get("/iecho", (req, res) => {
  if (req.query.text) {
    res.status(200).json({
      text: functions.ReversingString(req.query.text),
      palindrome: functions.creatingAuxToCompare(req.query.text),
    });
  } else {
    res.status(400).json({
      error: "No Parameter Entered",
    });
  }
});

app.listen(5500, () => {
  console.log(`Server initiated on port 5500!`);
});
