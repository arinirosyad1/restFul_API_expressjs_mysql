/*
	Contain any conntrollers of the application
*/

'use strict';

//memanggil file response
const resp = require('./res');
const connection = require('./connection');


exports.accounts = function(req,res){
	let sql = "SELECT *FROM account";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) {
			console.log(err)
		} else {
			resp.ok(results, res)
		}
	});
};


exports.idAccount = function(req,res){
	let sql = "SELECT * FROM account where account_id="+req.params.id;
	let query =connection.query(sql,function(err, results, fields) {
		if(err) {
			console.log(err)
		} else {
			resp.ok(results, res)
		}
	});
};


exports.InsertAccount = function(req,res){
	let data = {account_id:req.body.account_id, account_name: req.body.account_name, balance: req.body.balance};
	let sql = "INSERT INTO account SET ?";
	let query =connection.query(sql,data,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.UpdateAccount = function(req,res){
	let data = {account_id:req.body.account_id, account_name: req.body.account_name, balance: req.body.balance};
	let sql = "UPDATE account SET account_name= '"+req.body.account_name+"', balance= "+req.body.balance+" WHERE account_id= "+req.body.account_id+" ";
	let query =connection.query(sql,data,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.DeleteAccount = function(req,res){
	let sql = "DELETE FROM account WHERE account_id="+req.params.id+"";
	let query =connection.query(sql,function(err, results, fields) {
		if(err) throw err;
		resp.ok(results, res);
	});
};


exports.index = function(req, res){
	resp.ok('Done', res);
};