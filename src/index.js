import express from 'express';
const app = express();
import path from 'path';
import { PORT } from './config.js';
import { pool } from './models/db.js';
import { clienteRoutes, productosRoutes, serivceRoutes, insercionRoutes} from './routes/index.js';
import morgan from 'morgan';

app.use(morgan('dev'));
app.use(express.static('src'));

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('src/login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve('src/register.html'));
});

app.use('/usuarios', clienteRoutes);
app.use('/productos', productosRoutes);
app.use('/serivice', serivceRoutes);
app.use('/insercion', insercionRoutes)


app.listen(PORT, () => {
    console.log("Servidor corriendo", PORT);
});