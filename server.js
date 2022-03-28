const express=require('express')
const app=express()
const test=require('./middleware/test')
const port=6500

app.use(express.static('public'))
app.use('/style',express.static(__dirname+'/style'))
    // app.use(test) 
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/Acceuil", (req, res) => {
    res.sendFile(__dirname + "/views/Acceuil.html")
    
});
app.get("/Contact", (req, res) => {
    res.sendFile(__dirname + "/views/Contact.html");
});
app.get("/Service", (req, res) => {
    res.sendFile(__dirname + "/views/Service.html");
});


app.listen(port, err=> err? console.log(err): console.log(`server running at ${port}`))