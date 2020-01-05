var express = require('express');
var router = express.Router();

var Todo = require('../models/Todo.js');

/* GET /todos listing. */
//curl -XGET http://localhost:3000/todos

router.get('/', function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
//curl -XPOST http://localhost:3000/todos -d 'name=Master%20Routes&completed=false&note=soon'

router.post('/', function (req, res, next) {
  console.log(req);
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
//curl -XGET http://localhost:3000/todos/ID

router.get('/:id', function (req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
//curl -XPUT http://localhost:3000/todos/ID -d "note=hola"

router.put('/:id', function (req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

