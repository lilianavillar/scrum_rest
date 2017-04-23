var express         = require("express"),
    app             = express(),
    mongoose        = require('mongoose'),
    http            = require("http"),
    server          = http.createServer(app),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override");

require('./models/sprint')

var bugsController = require('./controllers/bugsController'),
    sprintsController = require('./controllers/sprintsController');
var router = express.Router();
var port= server.listen( process.env.HTTP_PORT || process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(router);

mongoose.connect('mongodb://liliviig:scrum17@ds115701.mlab.com:15701/scrum', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3001, function() {
    console.log("Node server running on http://localhost:3001");
  });
});

//Obtener los bugs de un sprint
router.route('/bugs/:id')
  .get(bugsController.findAllBugs);

router.route('/sprints')
  .get(sprintsController.findAll)
  .post(sprintsController.addSprint);

router.route('/login')
  .post(sprintsController.findByNameAndPasswd);

app.use('/api', router);
