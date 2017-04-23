var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var sprintSchema = new Schema({
  inicio:  { type: Date, default: Date.now },
  nombre:   { type: String, required: true },
  passwd:   { type: String, required: true }
});

module.exports = mongoose.model('sprints', sprintSchema);
