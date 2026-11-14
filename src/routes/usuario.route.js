import { Router } from 'express';
import * as UsuarioController from '../controllers/usuario.controller';

const router = router();

router.get('/', UsuarioController.ObtenerUsuarios);
router.get('/:id', UsuarioController.ObtenerUsuarioPorId);
router.post('/', UsuarioController.CrearUsuario);
router.put('/', UsuarioController.ActualizarUsuario);
router.delete('/', UsuarioController.EliminarUsuario);

export default router;