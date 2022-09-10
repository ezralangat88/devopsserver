const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Gurus Social experiance!")
})

//Running server
    app.listen(3006, () => {
        console.log("Server running at port 3006");
  });
  

  