import express from "express";
const PORT = 3000
import router from "./src/routes/auth.js";
import conexao from "./db.js";
const app = express();


app.use("/auth", router)

app.use(express.json());


app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: " + PORT)
})