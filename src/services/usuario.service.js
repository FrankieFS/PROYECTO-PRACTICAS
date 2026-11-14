const Usuarios = [
    {
        Id: 1,
        Nombre: "Frank",
        Apellidos: "FS"
    },
    {
        Id: 2,
        Nombre: "Ashie",
        Apellidos: "VM"
    },
    {
        Id: 3,
        Nombre: "Pinky",
        Apellidos: "VM"
    },
];

export async function ObtenerUsuarios() {
    return Usuarios;
}

export async function ObtenerUsuarioPorId(id) {
    return Usuarios.find(p => p.Id === id);
}

export async function CrearUsuario(usuario) {
    Usuarios.push(usuario)
    return usuario
}

export async function ActualizarUsuario(id, datosNuevos) {
    const index = Usuarios.findIndex(p => p.Id === id);

    if (index !== -1) {
        Usuarios[index] = { ...Usuarios[index], ...datosNuevos };
        return Usuarios[index];
    }
    
    return null;
}

export async function EliminarUsuario(id) {
    const index = Usuarios.findIndex(p => p.Id === id);

    if (index !== -1) {
        Usuarios.splice(index, 1);
        return true; 
    }
    
    return false;
}