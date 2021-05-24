import Express from "express";

const app = Express();
const port = 3000;

app.get("*",(req,res) =>{
    res.send(console.log('test'))
});

app.listen(port);
