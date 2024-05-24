"use strict";

var _require = require('express'),
  Router = _require.Router;
var router = Router();

// devuelve al llamar a pagina principal
router.get('/', function (req, res) {
  //res.send("Hello world");
  //res.json({"Title": "Hello world"});

  var data = {
    "name": "AGUSTIN",
    "lastname": "COLOMBO"
  };
  res.json(data);
});
module.exports = router;