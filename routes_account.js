'use strict';

module.exports = function(app) {
    var todoList = require('./controllers_account');

    app.route('/').get(todoList.index);

    app.route('/accounts').get(todoList.accounts);
	
	app.route('/account/:id').get(todoList.idAccount);
	
	app.route('/accounts').post(todoList.InsertAccount);
	
	app.route('/accounts').put(todoList.UpdateAccount);
	
	app.route('/account/:id').delete(todoList.DeleteAccount);
};