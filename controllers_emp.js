/*
	Contain any conntrollers of Employees Tabel
*/

'use strict';

//memanggil file response
const resp = require('./res');
const connection = require('./connection');


exports.emps = function(req,res){
	let sql = "SELECT * FROM bank_emp";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) {
			console.log(err)
		} else {
			resp.ok(results, res)
		}
	});
};


exports.IdEmp = function(req,res){
	let sql = "SELECT * FROM bank_emp where emp_id="+req.params.id;
	let query =connection.query(sql,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.InsertEmp = function(req,res){
	let data = {emp_id:req.body.emp_id, emp_name: req.body.emp_name, emp_position: req.body.emp_position};
	let sql = "INSERT INTO bank_emp SET ?";
	let query =connection.query(sql,data,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.UpdateEmp = function(req,res){
	let data = {emp_name: req.body.emp_name, emp_position: req.body.emp_position, emp_id: req.param.id};
	let sql = "UPDATE bank_emp SET emp_name= '"+req.body.emp_name+"', emp_position = '"+req.body.emp_position+"' WHERE emp_id= "+req.params.id+" ";
	console.log(sql);
	let query =connection.query(sql,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.DeleteEmp = function(req,res){
	let sql = "DELETE FROM bank_emp WHERE emp_id="+req.params.id+"";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.index = function(req, res){
	resp.ok('Done', res);
};