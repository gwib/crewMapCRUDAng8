'use strict';

var Crew = require('../models/Crew');

exports.getAllCrews = function(req, res) {
  Crew.getAllCrews(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', task);
    res.send(task);
  });
};



exports.createCrew = function(req, res) {
  var new_crew = new Crew(req.body);

  //handles null error
  if(!new_crew.crewName){

    res.status(400).send({ error:true, message: 'Crew braucht einen Namen!' });

  }
  else{

    Crew.createCrew(new_crew, function(err, crew) {

      if (err)
        res.send(err);
      res.json(crew);
    });
  }
};


exports.getCrewById = function(req, res) {
  Crew.getCrewById(req.params.crewId, function(err, crew) {
    if (err)
      res.send(err);
    res.json(crew);
  });
};


exports.updateById = function(req, res) {
  Crew.updateById(req.params.crewId, new Crew(req.body), function(err, crew) {
    if (err)
      res.send(err);
    res.json(crew);
  });
};


exports.removeById = function(req, res) {


  Crew.removeById( req.params.crewId, function(err, crew) {
    if (err)
      res.send(err);
    res.json({ message: 'Crew successfully deleted' });
  });
};
