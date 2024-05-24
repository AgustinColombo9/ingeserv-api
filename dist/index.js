"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
//const morgan = require('morgan');
//const { use } = require('./routes/index');

/*
// routes
// importa las rutas
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
*/
// starting the server
/*
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});
*/

_app["default"].listen(_app["default"].get('port'));
console.log('server on port', _app["default"].get('port'));