// Configurando o servidor
const express = require("express")
const server = express()


// Configurar o servidor para aprensentar arquivos estáticos
server.use(express.static('public'))


// Habilitar body do formulário
server.use(express.urlencoded({ extended: true }))


// Configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
  express: server,
  noCache: true
})


// Lista de doadores: Array
const donors = [
  {
    name: "Arlan Biati",
    blood: "O-"
  }
]

// Configurar a apresentação da página
server.get("/", function(req, res) {
  return res.render("index.html", { donors })
})


server.post("/", function(req, res) {
  // Pegar dados do formulário
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood


  // Colocar valores dentro do array
  donors.push({
    name: name,
    blood: blood,
  })


  return res.redirect("/")
})


// Ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
  console.log("iniciei o servidor.")
})