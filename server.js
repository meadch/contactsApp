var express = require('express'),
    app = express(),
    port = 8001;

app.use(express.static(__dirname + "/app"));
app.use(express.static(__dirname + "/bower_components"));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/app/index.html');
})

app.listen(port, ()=>{ console.log(`Running on ${port}`)});
