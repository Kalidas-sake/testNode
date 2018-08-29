var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mytasks');
var tasks = db.collection('tasks');

router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, docs){
		if (err) {
			res.send(err);
		}
		res.json(docs);
	});
})

router.get('/task/:id', function(req, res, next){
	db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, task){
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
})

module.exports = router;