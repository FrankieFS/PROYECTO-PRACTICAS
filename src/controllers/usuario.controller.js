import * as UsuarioService from '../services/usuario.service.js'

export const ObtenerUsuarios = async (req, res) => {
    const usuarios = await UsuarioService.ObtenerUsuarios();
    res.json(usuarios);
};

export const ObtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params;

    if(id === undefined) {
        res.status(400).send('Por favor especificar el id');
        return;
    }

    if(isNaN(id)){
        res.status(400).send('El Id debe ser un número');
        return; 
    }

    const parsedId = parseInt(id);
    const usuario = await UsuarioService.ObtenerUsuarioPorId(parsedId);

    if(!usuario) {
        res.status(404).send(`Usuario con id ${parsedId} no existe`);
        return;
    }

    res.json(usuario);
};

export const CrearUsuario = async (req, res) => {
    const usuario = req.body;
    const usuarioCreado = await UsuarioService.CrearUsuario(usuario);

    res.status(201).json({message: 'Usuario creado', usuario: usuarioCreado});
};

export const ActualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    const parsedId = parseInt(id);

    const UsuarioExistente = await UsuarioService.ObtenerUsuarioPorId(parsedId);

    if(!UsuarioExistente) {
        res.status(400)
            .json({ message: `Usuario con id ${parsedId} no existe` });
            return;
    }

    const UsuarioActualizado = await UsuarioService.UsuarioActualizado(parsedId, datos);

    res.json({mensaje: 'Usuario actualizada', usuario: UsuarioActualizado});
};

export const EliminarUsuario = async (req, res) => {};
