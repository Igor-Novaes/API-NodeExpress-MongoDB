module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Cria um tutorial novo
    router.post("/", tutorials.create);
  
    // Recupera os tutoriais
    router.get("/", tutorials.findAll);
  
    // Recupere todos os tutoriais publicados
    router.get("/published", tutorials.findAllPublished);
  
    // Recupere um unico tutorial por um id
    router.get("/:id", tutorials.findOne);
  
    // aAtualiza um tutorial por um id
    router.put("/:id", tutorials.update);
  
    // Deleta um tutorial por um id
    router.delete("/:id", tutorials.delete);
  
    // Deleta todos os tutoriais
    router.delete("/", tutorials.deleteAll);
  
    app.use('/API/tutorials', router);
  };