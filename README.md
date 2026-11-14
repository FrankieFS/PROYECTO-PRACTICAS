# Proyecto: Contador de Horas de Practicas Preprofesionales

## Descripción:
Este proyecto consiste en crear una pagina web que nos permita llevar un conteo de las horas
las cuales uno ha desarrollado o completado, tanto para vinculación como para practicas preprofesionales.
Dado que los estudiantes debemos realizar horas de vinculación o de las práticas preprofesionales, debemos realizar un seguimiento y registro de dicha información en hojas de calculo o usar algun método para registrar lo que hacemos de manera que podamos hacer una entrega a secretaria donde validamos que hemos completado nuestras horas

- Esto resuelve el problema de no perder información en caso de no recordar donde ha sido archivada
- Evitar la duplicación de Hojas de manera que uno puede llevar un Dashboard con registro por fechas
- Evitar la confusión del estudiante al hacer un conteo manual al llevar las horas, el sistema automatizado
de la página cuenta en tiempo real las horas realizadas, pendientes y por aprobar

Para esto se hará uso de tecnologías como:
- Servicios de API's
- Lenguajes de promgramación en HTML, JS, CSS y una estructura de carpetas para tener una mejor presentación.
- Conexión a base de datos para el registro de datos tanto para usuarios, supervisores y administradores.
- como herramientas adicionales un contenedor en Docker.

El alcanze de este proyecto aun se encuentra en un LocalHost.

## 🔌 Listado de Endpoints

### Endpoints de Usuarios
| Método |        Endpoint       |         Descripción        |
|--------|-----------------------|----------------------------|
| POST   | `/usuarios`           | Registrar un nuevo usuario |
| GET    | `/usuarios`           | Listar todos los usuarios  |
| GET    | `/usuarios/{id}`      | Obtener usuario por ID     |
| PUT    | `/usuarios/{id}`      | Actualizar usuario         |
| DELETE | `/usuarios/{id}`      | Eliminar usuario           |
| POST   | `/usuarios/login`     | Autenticación de usuario   | (Aun en desarrollo)

### Endpoints de Supervisores
| Método |        Endpoint          |        Descripción         |
|--------|--------------------------|----------------------------|
| POST   | `/supervisores`          | Registrar nuevo supervisor |
| GET    | `/supervisores`          | Listar supervisores        |
| GET    | `/supervisores/{id}`     | Obtener supervisor por ID  |
| PUT    | `/supervisores/{id}`     | Actualizar supervisor      |


### Estructura del proyecto:

```text
PROYECTO PRACTICAS/
│
├── 📂 FrontEnd/                  # Interfaz de usuario
│   ├── 📂 css/                   # Hojas de estilo
│   ├── 📂 js/                    # Lógica del lado del cliente
│   └── 📄 index.html             # Página principal
│
├── 📂 src/                       # Código fuente del Backend
│   ├── 📂 controllers/           # Controladores (manejo de req/res)
│   │   ├── ⚙️ supervisor.controller.js
│   │   └── ⚙️ usuario.controller.js
│   │
│   ├── 📂 routes/                # Definición de rutas de la API
│   │   ├── 🌿 supervisor.route.js
│   │   └── 🌿 usuario.route.js
│   │
│   └── 📂 services/              # Lógica de negocio y acceso a datos
│       ├── ⚠️ supervisor.service.js
│       └── ⚠️ usuario.service.js
│
├── 📂 node_modules/              # Dependencias del proyecto (no subir a GitHub)
├── 📄 app.js                     # Archivo principal / Punto de entrada del servidor
├── 📄 package.json               # Configuración y dependencias de Node.js
├── 📄 package-lock.json          # Historial exacto de dependencias
└── 📄 README.md                  # Documentación del proyecto

