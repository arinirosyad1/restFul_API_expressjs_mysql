'use strict';

module.exports = function(app) {
    var todoList = require('./controllers_user');

    app.route('/').get(todoList.index);

    app.route('/users').get(todoList.users);
	
	app.route('/user/:id').get(todoList.IdUser);
	
	app.route('/users').post(todoList.InsertUser);
	
	app.route('/users').put(todoList.UpdateUser);
	
	app.route('/user/:id').delete(todoList.DeleteUser);
};