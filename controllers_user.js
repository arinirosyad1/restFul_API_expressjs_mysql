/*
	Contain any conntrollers of the application
*/

'use strict';

//memanggil file response
const resp = require('./res');
const connection = require('./connection');


exports.users = function(req,res){
	let sql = "SELECT *FROM users";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) {
			console.log(err)
		} else {
			resp.ok(results, res)
		}
	});
};


exports.IdUser = function(req,res){
	let sql = "SELECT * FROM users where username="+req.params.id;
	let query =connection.query(sql,function(err, results, fields) {
		if(err) {
			console.log(err)
		} else {
			resp.ok(results, res)
		}
	});
};


exports.InsertUser = function(req,res){
	let data = {username:req.body.username, passwd: req.body.passwd};
	let sql = "INSERT INTO users SET ?";
	let query =connection.query(sql,data,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.UpdateUser = function(req,res){
	let data = {username:req.body.username, passwd:req.body.passwd};
	let sql = "UPDATE users SET passwd= '"+req.body.passwd+"' WHERE username= "+req.body.username+" ";
	let query =connection.query(sql,data,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.DeleteUser = function(req,res){
	let sql = "DELETE FROM users WHERE username="+req.params.id+"";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.index = function(req, res){
	resp.ok('Done', res);
};