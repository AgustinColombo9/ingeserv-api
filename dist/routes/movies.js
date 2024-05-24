"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _require = require("express"),
  Router = _require.Router;
var router = Router();
var _ = require('underscore');
var movies = require('../sample.json');
console.log(movies);
router.get('/', function (req, res) {
  res.send(movies);
});
router.post('/', function (req, res) {
  var _req$body = req.body,
    title = _req$body.title,
    director = _req$body.director,
    year = _req$body.year,
    rating = _req$body.rating;
  if (title && director && year && rating) {
    //res.json('saved');
    var id = movies.length + 1;
    var newMovie = _objectSpread(_objectSpread({}, req.body), {}, {
      id: id
    });
    movies.push(newMovie);
    res.json(movies);
  } else {
    //res.send('Wrong Request');
    res.status(500).json({
      error: 'There was an error.'
    });
  }
  res.send('received');
});
router["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  _.each(movies, function (movie, i) {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.send(movies);
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
    title = _req$body2.title,
    director = _req$body2.director,
    year = _req$body2.year,
    rating = _req$body2.rating;
  if (title && director && year && rating) {
    _.each(movies, function (movie, i) {
      if (movie.id == id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({
      error: "There was an error."
    });
  }
});
module.exports = router;