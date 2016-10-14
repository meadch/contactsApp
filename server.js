var express = require('express'),
    app = express(),
    port = 3000;

app.use(express.static(__dirname + "/app"));
app.use(express.static(__dirname + "/bower_components"));

app.listen(port, ()=>{ console.log(`Running on ${port}`)});
