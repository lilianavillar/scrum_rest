var mongoose = require('mongoose');
var sprints = mongoose.model('sprints');
var bugs = mongoose.model('bugs');

//Método encargado de devolver todos los BUGS de un SPRINT
exports.findAllBugs = function(req, res) {
    console.log('Get/bugs' + req.params.id);
    sprints.find({'_id': req.params.id}, 'bugs', function(err, bugs) {
        if(err){
            res.send(500, err.message);
        }
        res.status(200).jsonp(bugs);
    });
};
