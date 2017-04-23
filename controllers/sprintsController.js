var mongoose = require('mongoose');
var sprints  = mongoose.model('sprints');

//Método encargado de añadir un nuevo SPRINT
exports.addSprint = function(req, res) {
    console.log('Post/addSprint');
    console.log('Parámetros: ' + req.body);

    var sprint = new sprints({
        inicio:     req.body.inicio,
        nombre:     req.body.nombre,
        passswd:    req.body.passwd
    });

    sprint.save(function(err, sprint) {
        if(err){
            return res.status(500).send( err.message);
        }
        res.status(200).jsonp(sprint);
    });
};
