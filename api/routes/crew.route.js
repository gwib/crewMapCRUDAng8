const express = require('express');

//const app = express();
const crewRoutes = express.Router();

let Crew = require('../models/Crew');

// route to add new crews
crewRoutes.route('/add').post(function (req, res){
  let crew = new Crew(req.body);
  Crew.createCrew(crew, function(err, crew) {
    if (err)
      res.send(err);
    res.status(200).json({'Crew': 'Crew has been added successfully!'});
    res.json(crew);
  });
});

// route to get all crews
crewRoutes.route('/').get(function (req, res) {
  Crew.getAllCrews(function (err, crews){
    if (err) {
      console.log(err);
    }
    else {
      res.json(crews);
    }
  });
});

crewRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Crew.getCrewById(id, function (err, crew){
    res.json(crew);
  });
});

//  Defined update route
crewRoutes.route('/update/:id').post(function (req, res) {
  Crew.getCrewById(req.params.id, function (err, crew) {
    if (!crew)
      res.status(404).send("Record not found");
    else {
      crew.CrewName = req.body.CrewName;
      crew.CrewMeeting = req.body.CrewMeeting;
      crew.CrewEmail = req.body.CrewEmail;

      Crew.createCrew(crew, function (err, crew) {
        if (err) {
          res.send(err);
          res.status(400).json('Unable to update crew');
        } else {
          res.status(200).json({'Crew': 'Crew has been added successfully!'});
          res.json(crew);
        }
      });
    }
  });
});

// Defined delete | remove | destroy route
crewRoutes.route('/delete/:id').get(function (req, res) {
  Crew.removeById({_id: req.params.id}, function(err, crew){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = crewRoutes;
