
const express = require("express");
const app = express();

const handlebars = require("express-handlebars").engine;
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// TODO: Formulário contendo: nome, endereco, bairro, cep, cidade e estado

app.get("/", function(req, res){    
  res.render("home")
});

// TODO: Tabela com a listagem contendo: nome, endereco, bairro, cep, cidade e estado
app.get("/list", function(req, res){    
  res.render("list")
});
app.listen(8081, function(){    
  console.log("Servidor Ativo!")
});