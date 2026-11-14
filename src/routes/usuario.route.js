import { Router } from 'express';
import * as UsuarioController from '../controllers/usuario.controller.js';

const router = Router();

router.get('/', UsuarioController.ObtenerUsuarios);
router.get('/:id', UsuarioController.ObtenerUsuarioPorId);
router.post('/', UsuarioController.CrearUsuario);
router.put('/:id', UsuarioController.ActualizarUsuario);
router.delete('/:id', UsuarioController.EliminarUsuario);

export default router;