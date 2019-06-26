//todo: fix routes for mysql
'use strict';
module.exports = function(app) {
  var crewList = require('../controllers/crewController');

  // todoList Routes
  app.route('/crews')
    .get(crewList.getAllCrews)
    .post(crewList.createCrew);

  app.route('/crews/:crewId')
    .get(crewList.getCrewById)
    .put(crewList.updateById)
    .delete(crewList.removeById);
};
