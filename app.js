var express = require('express');
// var _ = require('underscore');
var cors = require('cors');

var app = express();


app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res) {
  res.send("Hello");
});

var currentId = 3;
var radionice = [
  { id: 0, ime: "javascript", mesto: "hklbgd"},
  { id: 1, ime: "os", mesto: "hklbgd"},
  { id: 2, ime: "elektronika", mesto: "hklbgd"}
];


app.get('/radionice', function(req,res){
  setTimeout(function(){
    res.json(radionice);
  }, 3000);
});

app.get('/radionice/:id',function(req,res){
    var id = Number(req.params.id), radionica;
    //TODO dodaj underscore
    console.log(id);
    for(var i in radionice){
        if(radionice[i].id === id){
            radionica = radionice[i];
        }
    }
    res.json(radionica);
});

//TODO zameni sa post
app.get('/test',function(req,res){
    var radionica = {
      id: currentId,
      ime: req.query.ime,
      mesto: "haklab"
    }
    console.log(radionica);
    currentId++;
    radionice.push(radionica);
});

// HTTP - get (citanje), post (kreiranje), put (modifikacija), delete (brisanje)


app.listen(app.get('port'),function(){
  console.log("server has stared on port 5000");

})
