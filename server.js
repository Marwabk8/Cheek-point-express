

const express = require("express");

const app = express ();

 const da = new Date()
 var day = da.getDay()+1
 var hours = da.getHours()


const middleware =(req,res,next)=>{
    if(day>0 && day<7 && hours<17 && hours>9){next()}
    else{res.send('<h1> We are closed, Opening hours : Monday to Friday, 9 AM to 5 PM</h1>')} 
};
app.use(middleware);

app.use(express.static('pages'));

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname+'/pages/Home.html')

// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/pages/Contact Us.html')
// })

// app.get('/services',(req,res)=>{
//     res.sendFile(__dirname+'/pages/Our Services.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/pages/style.css')
// })

const port = 8000;
app.listen(port,()=> console.log(`port is runing en port ${port}`));