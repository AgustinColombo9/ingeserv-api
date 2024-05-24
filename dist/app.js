"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directorioFacturas = exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
var _path = _interopRequireDefault(require("path"));
var _usuariosRoutes = _interopRequireDefault(require("./routes/usuarios.routes.js"));
var _productosRoutes = _interopRequireDefault(require("./routes/productos.routes.js"));
var _clienteRoutes = _interopRequireDefault(require("./routes/cliente.routes.js"));
var _transaccionesRoutes = _interopRequireDefault(require("./routes/transacciones.routes.js"));
var _categoriaRoutes = _interopRequireDefault(require("./routes/categoria.routes.js"));
var _tipoidentificacionRoutes = _interopRequireDefault(require("./routes/tipoidentificacion.routes.js"));
var _situacionIvaRoutes = _interopRequireDefault(require("./routes/situacionIva.routes.js"));
var _provinciaRoutes = _interopRequireDefault(require("./routes/provincia.routes.js"));
var _ciudadRoutes = _interopRequireDefault(require("./routes/ciudad.routes.js"));
var _rubroRoutes = _interopRequireDefault(require("./routes/rubro.routes.js"));
var _marcaRoutes = _interopRequireDefault(require("./routes/marca.routes.js"));
var _proveedorRoutes = _interopRequireDefault(require("./routes/proveedor.routes.js"));
var _tipomonedaRoutes = _interopRequireDefault(require("./routes/tipomoneda.routes.js"));
var _condicionRoutes = _interopRequireDefault(require("./routes/condicion.routes.js"));
var _tipoproductoRoutes = _interopRequireDefault(require("./routes/tipoproducto.routes.js"));
var _servicioRoutes = _interopRequireDefault(require("./routes/servicio.routes.js"));
var _pedidoRoutes = _interopRequireDefault(require("./routes/pedido.routes.js"));
var _recetaRoutes = _interopRequireDefault(require("./routes/receta.routes.js"));
var _serviceRoutes = _interopRequireDefault(require("./routes/service.routes.js"));
var _presupuestoRoutes = _interopRequireDefault(require("./routes/presupuesto.routes.js"));
var _chatRoutes = _interopRequireDefault(require("./routes/chat.routes.js"));
var _archviosRoutes = _interopRequireDefault(require("./routes/archvios.routes.js"));
var _mantenimientoRoutes = _interopRequireDefault(require("./routes/mantenimiento.routes.js"));
var _ofertasRoutes = _interopRequireDefault(require("./routes/ofertas.routes.js"));
var _bannersRoutes = _interopRequireDefault(require("./routes/banners.routes.js"));
var _notificacionesRoutes = _interopRequireDefault(require("./routes/notificaciones.routes.js"));
var _trabajosRoutes = _interopRequireDefault(require("./routes/trabajos.routes.js"));
var _patologiasRoutes = _interopRequireDefault(require("./routes/patologias.routes.js"));
var _tiponotificacionRoutes = _interopRequireDefault(require("./routes/tiponotificacion.routes.js"));
var _facturasRoutes = _interopRequireDefault(require("./routes/facturas.routes.js"));
var cors = require('cors');

//const bodyParser = require('body-parser')
//import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');

//import fileUpload from 'express-fileupload'

var app = (0, _express["default"])();

// settings
app.set('port', _config["default"].port);
// agrega llaves al resultado JSON
app.set('json spaces', 2);
//app.use(bodyParser.json({ limit: '10mb' }))

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(cors());
// reciebe la peticion antes que el servidor 
// middlewares 
// entender los datos que llegan del formulario html (solo desde input/no map, etc) 
app.use(_express["default"].urlencoded({
  extended: false
}));
// permite reciber formatos JSON
app.use(_express["default"].json());
//app.use (morgan('dev')); 
//app.use(fileUpload());

//export const directorioFacturas = path.join(__dirname, 'facturas_app')
var directorioFacturas = exports.directorioFacturas = process.env.FOLDER_FACTURAS;
app.use('/facturas_app', _express["default"]["static"](directorioFacturas));
app.use(_usuariosRoutes["default"]);
app.use(_productosRoutes["default"]);
app.use(_clienteRoutes["default"]);
app.use(_transaccionesRoutes["default"]);
app.use(_categoriaRoutes["default"]);
app.use(_tipoidentificacionRoutes["default"]);
app.use(_tipomonedaRoutes["default"]);
app.use(_situacionIvaRoutes["default"]);
app.use(_provinciaRoutes["default"]);
app.use(_ciudadRoutes["default"]);
app.use(_rubroRoutes["default"]);
app.use(_marcaRoutes["default"]);
app.use(_categoriaRoutes["default"]);
app.use(_proveedorRoutes["default"]);
app.use(_condicionRoutes["default"]);
app.use(_tipoproductoRoutes["default"]);
app.use(_servicioRoutes["default"]);
app.use(_pedidoRoutes["default"]);
app.use(_recetaRoutes["default"]);
app.use(_serviceRoutes["default"]);
app.use(_presupuestoRoutes["default"]);
app.use(_chatRoutes["default"]);
app.use(_archviosRoutes["default"]);
app.use(_mantenimientoRoutes["default"]);
app.use(_ofertasRoutes["default"]);
app.use(_bannersRoutes["default"]);
app.use(_notificacionesRoutes["default"]);
app.use(_trabajosRoutes["default"]);
app.use(_patologiasRoutes["default"]);
app.use(_tiponotificacionRoutes["default"]);
app.use(_facturasRoutes["default"]);
var _default = exports["default"] = app;