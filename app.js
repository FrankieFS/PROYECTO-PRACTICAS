import express from 'express';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(morgan('dev')); // para las peticiones HTTP


app.listen(PORT, () => {
  console.log(`El servidor está alojado en Http://localhost:${PORT}`);
});