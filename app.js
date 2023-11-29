import express from "express";

const PORT = 9898;

const app = express();

// app.use((req,res, next) =>{

// })
app.use(express.static("static"));
app.listen(PORT);
