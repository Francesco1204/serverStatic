const express = require("express")
const fs = require("fs")
const app = new express()
const port = 8080

app.use(express.static("./public"))

app.listen(port, () => console.log("server avviato sulla porta " + port))