require('dotenv').config();
var express = require('express');
var app = express();
var os = require('os');


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req,res)=>{
  try{
    res.json({
      ipaddress:req.headers['x-forwarded-for'],
      language:req.headers['accept-language'],
      software:req.headers['user-agent']
    })
  }
  catch(e){
    res.status(400).send(e)
  }
  
})
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
