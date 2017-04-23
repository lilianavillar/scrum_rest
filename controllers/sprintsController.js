var mongoose = require('mongoose');
var sprints  = mongoose.model('sprints');

//Método encargado de añadir un nuevo SPRINT
exports.addSprint = function(req, res) {
    console.log('Post/addSprint');
    console.log('Parámetros: ' + req.body.bugs[0].titulo);

    var sprint = new sprints({
        inicio:     req.body.inicio,
        nombre:     req.body.nombre,
        passwd:    req.body.passwd,
        bugs:       req.body.bugs
    });

    sprint.save(function(err, sprint) {
        if(err){
            console.log(err);
            return res.status(500).send( err.message);
        }
        res.status(200).jsonp(sprint);
    });
};

//Método encargado de listar los sprints
exports.findAll = function(req, res) {
    console.log('Get/sprints')
    sprints.find(function(err, sprints) {
      if(err) {
         res.send(500, err.message);
      }
      res.status(200).jsonp(sprints);
      });
};

//Método encargado de obtener un sprint a partir de su nombre
exports.findByNameAndPasswd = function(req, res){
    console.log('Get/Sprint by name and password');
    console.log(req.body);
    var name = req.body.name;
    var passwd = req.body.passwd;
    sprints.findOne({'nombre': name, 'passwd': passwd}, function(err, sprint){
        if(err){
            return res.send(500, err.message);
        }
        res.status(200).jsonp(sprint);
    });
};
