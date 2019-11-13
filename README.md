# mern-app

Pasos para levartar los servicios y correr el proyecto.

* **db:**
  - Copiar el archivo `.env.example` como `.env` y rellenar las variables de conexion a la base de datos.
  - Ejecutar `npm install`
  - Ejecutar `npm run setup --yes`. Si el resultado es "Sucess", todo salio bien; en caso contrario revisa que tengas tu DB corriendo.

* **api:** Corre por defecto en el puerto `3000`
  - Copiar el archivo `.env.example` como `.env` y rellenar la variable `PORT` donde desees que corra el servicio.
  - Ejecutar `npm install`
  - Ejecutar `npm start`. En la terminal tendras un mensaje: "App listening on port `${port}`"

  Los endpoints disponibles son:

  - `[GET] api/users` Retorna todos los usuarios
  - `[GET] api/user/:id` Retorna el usuario segun corresponda el ID
  - `[POST] api/user` Permite crear un usuario nuevo. En el `body` de la llamada debe ir con `{ "name": "Joaquin", "lastName": "Araujo" }`
  - `[PUT] api/user/:id` Permite actualizar los datos de un usuario
  - `[DELETE] api/user/:id` Permite eliminar un usuario

* **public-site:** Corre por defecto en el puerto `8000`
  - Ejecutar `npm install`
  - Ejecutar `npm dev` si quieres desarrollar
  - Ejecutar `npm build` para obtener los archivos estaticos `.js`, `.html`, `.css`
  - EJecutar `npm run serve` para servir los archivos estaticos anteriormente generados

Proximamente ha implementar:

- Pruebas unitarias para el API
- Pruebas unitarias para el Public site
- Implementar Docker para cada servicio y conectarlos con docker-compose
