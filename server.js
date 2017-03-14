var express = require('express');
var app = express();


app.get('/api/whoami', (req, res) => {

  var  myapijson = {
    "ipaddress": req.ip,
    "language": req.headers["accept-language"].split(",")[0],
    "software": req.headers["user-agent"].split("(")[1].split(")")[0]
  };

  console.log(JSON.stringify(myapijson) );

  res.set('Content-Type', 'application/json');
  res.json(myapijson);
 
});


app.get('/', (req, res) => {
    
    res.redirect("/api/whoami");
})

app.listen(process.env.PORT, function () {
  console.log('Server is up and running!')
})