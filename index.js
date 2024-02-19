const express = require('express')
const app = express()
let fs = require('fs');
const PORT = process.env.PORT || 4999;

const date = new Date();

let day = date.getDate();
let month = date.getMonth();
const monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
let year = date.getFullYear();

let currentDate = `${day}-${monthNames[month]}-${year}`;
console.log(currentDate);


app.get('/',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.writeFileSync('date-time.txt', currentDate, 'utf-8')
})

app.listen(PORT,()=>console.log(`App is running in ${PORT}`))