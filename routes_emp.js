'use strict';

module.exports = function(app) {
    var todoList = require('./controllers_emp');

    app.route('/').get(todoList.index);

    app.route('/employees').get(todoList.emps);
	
	app.route('/employee/:id').get(todoList.IdEmp);
	
	app.route('/employees').post(todoList.InsertEmp);
	
	app.route('/employees/:id').put(todoList.UpdateEmp);
	
	app.route('/employees/:id').delete(todoList.DeleteEmp);
};