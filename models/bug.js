var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var bugSchema = new Schema({
  titulo:       {type: String},
  descripcion:  { type: String },
  estado:       { type: String, enum:
                  ['Pendiente', 'En progreso', 'Hecho','En pruebas', 'Terminado']
                }
  prioridad:    { type: Number},
  estimacion:   { type: Number},
  horas:        { type: Number},
  miembro:      { type: String}
});

module.exports = mongoose.model('bugs', bugSchema);
