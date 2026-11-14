import express from 'express';
import morgan from 'morgan';
import UsuarioRouter from './src/routes/usuario.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(morgan('dev')); // para las peticiones HTTP

app.use('/usuarios', UsuarioRouter)


app.listen(PORT, () => {
  console.log(`El servidor está alojado en Http://localhost:${PORT}`);
});