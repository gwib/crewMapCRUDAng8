//todo: define crew model
'user strict';
var sql = require('../DB');

//Crew object constructor
// Crew Model
var Crew = function(crew){
  this.crewName = crew.crewName;
  this.crewMeeting = crew.crewMeeting;
  this.crewEmail = crew.crewEmail;
  this.created_at = new Date();
};

// ---- CRUD ---------------------
Crew.createCrew = function (newCrew, result) {
  sql.query("INSERT INTO crews set ?", newCrew, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Crew.getCrewById = function (crewId, result) {
  sql.query("Select crew from crews where id = ? ", crewId, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);

    }
  });
};

Crew.getAllCrews = function (result) {
  sql.query("Select * from crews", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('tasks : ', res);

      result(null, res);
    }
  });
};

Crew.updateById = function(id, crew, result){
  sql.query("UPDATE crews SET crew = ? WHERE id = ?", [crew.crew, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
Crew.removeById = function(id, result){
  sql.query("DELETE FROM crews WHERE id = ?", [id], function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{

      result(null, res);
    }
  });
};

module.exports= Crew;
