import express from 'express'
import config from './config.js'
const cors = require('cors')
import path from 'path';
//const bodyParser = require('body-parser')
//import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');

import usuarioRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
import clientesRoutes from './routes/cliente.routes.js'
import transaccionesRoutes from './routes/transacciones.routes.js'
import categoriasRoutes from './routes/categoria.routes.js'
import tipoidentificacionRoutes from './routes/tipoidentificacion.routes.js'
import situacionIvaRoutes from './routes/situacionIva.routes.js'
import provinciasRoutes from './routes/provincia.routes.js'
import ciudadesRoutes from './routes/ciudad.routes.js'
import rubrosRoutes from './routes/rubro.routes.js'
import marcasRoutes from './routes/marca.routes.js'
import categoriaRoutes from './routes/categoria.routes.js'
import proveedorRoutes from './routes/proveedor.routes.js'
import tipomonedaRoutes from './routes/tipomoneda.routes.js'
import condicionRoutes from './routes/condicion.routes.js'
import tipoproductoRoutes from './routes/tipoproducto.routes.js'
import servicioRoutes from './routes/servicio.routes.js'
import pedidoRoutes from './routes/pedido.routes.js'
import recetaRoutes from './routes/receta.routes.js'
import serviceRoutes from './routes/service.routes.js'
import presupuestoRoutes from './routes/presupuesto.routes.js'
//import fileUpload from 'express-fileupload'
import chatsRoutes from './routes/chat.routes.js'
import archivosRoutes from './routes/archvios.routes.js'
import mantenimientoRoutes from './routes/mantenimiento.routes.js'
import ofertasRoutes from './routes/ofertas.routes.js'
import bannersRoutes from './routes/banners.routes.js'
import notificacionesRoutes from './routes/notificaciones.routes.js'
import trabajosRoutes from './routes/trabajos.routes.js'
import patologiasRoutes from './routes/patologias.routes.js'
import tiposnotificacionRoutes from './routes/tiponotificacion.routes.js'
import facturasRoutes from './routes/facturas.routes.js'

const app = express()

// settings
app.set('port', config.port)
// agrega llaves al resultado JSON
app.set('json spaces', 2)
//app.use(bodyParser.json({ limit: '10mb' }))

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(cors())
// reciebe la peticion antes que el servidor 
// middlewares 
// entender los datos que llegan del formulario html (solo desde input/no map, etc) 
app.use(express.urlencoded({extended: false}));
// permite reciber formatos JSON
app.use(express.json());
//app.use (morgan('dev')); 
//app.use(fileUpload());

//export const directorioFacturas = path.join(__dirname, 'facturas_app')
export const directorioFacturas = process.env.FOLDER_FACTURAS;

app.use('/facturas_app', express.static(directorioFacturas));

app.use(usuarioRoutes);
app.use(productosRoutes);
app.use(clientesRoutes);
app.use(transaccionesRoutes);
app.use(categoriasRoutes);
app.use(tipoidentificacionRoutes);
app.use(tipomonedaRoutes);
app.use(situacionIvaRoutes);
app.use(provinciasRoutes);
app.use(ciudadesRoutes);
app.use(rubrosRoutes);
app.use(marcasRoutes);
app.use(categoriaRoutes);
app.use(proveedorRoutes);
app.use(condicionRoutes);
app.use(tipoproductoRoutes);
app.use(servicioRoutes);
app.use(pedidoRoutes);
app.use(recetaRoutes);
app.use(serviceRoutes);
app.use(presupuestoRoutes);
app.use(chatsRoutes);
app.use(archivosRoutes);
app.use(mantenimientoRoutes);
app.use(ofertasRoutes);
app.use(bannersRoutes);
app.use(notificacionesRoutes);
app.use(trabajosRoutes);
app.use(patologiasRoutes);
app.use(tiposnotificacionRoutes);
app.use(facturasRoutes)

export default app