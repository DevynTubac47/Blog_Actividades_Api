# Blog_Actividades_Api
El proyecto consiste en crear un blog de aprendizaje donde se publicarán las actividades de los tres cursos del área técnica. Este blog servirá como un registro organizado de los trabajos y proyectos de aprendizaje, accesible para cualquier visitante. 

## Endpoints de la API

### Publicación

1. **Agregar publicación**
   - **URL:** `/blogActivity/v1/publication/addPublication`
   - **Método:** `POST`
   - **Cuerpo:**
     ```json
     {
         "title": "A Canito le guta la Angie",
         "description": "En esta publicación hablaremos como niega que le gusta.",
         "course": "Tecnología"
     }
     ```

2. **Listar publicaciones por curso**
   - **URL:** `/blogActivity/v1/publication/{course}`
   - **Método:** `GET`
   - **Parámetros:**
     - `course`: El nombre del curso para filtrar las publicaciones.

3. **Listar todas las publicaciones**
   - **URL:** `/blogActivity/v1/publication/`
   - **Método:** `GET`

4. **Listar publicación por ID**
   - **URL:** `/blogActivity/v1/publication/publication/{id}`
   - **Método:** `GET`
   - **Parámetros:**
     - `id`: El ID de la publicación que se desea consultar.

5. **Actualizar publicación**
   - **URL:** `/blogActivity/v1/publication/updatePublication/{id}`
   - **Método:** `PUT`
   - **Parámetros:**
   - `id`: El ID de la publicación que se desea actualizar.
   - **Cuerpo:**
     ```json
     {
         "title": "Procesadores, HTML y CSS"
     }
     ```

6. **Eliminar publicación**
   - **URL:** `/blogActivity/v1/publication/deletePublication/{id}`
   - **Método:** `DELETE`
   - **Parámetros:**
   - `id`: El ID de la publicación que se desea eliminar.

### Comentario

1. **Agregar comentario**
   - **URL:** `/blogActivity/v1/comment/{publicationId}/addComment`
   - **Método:** `POST`
   - **Cuerpo:**
     ```json
     {
         "userName": "Devyn Tubac",
         "textComment": "Hola Mundo"
     }
     ```

2. **Listar comentarios**
   - **URL:** `/blogActivity/v1/comment/{publicationId}/comments`
   - **Método:** `GET`
   - **Parámetros:**
     - `publicationId`: El ID de la publicación para la cual se desean listar los comentarios.

    
Mis disculpas, parece que algo se cortó y no se completó la respuesta correctamente. Aquí tienes el README completo, sin omisiones:


## Instalación

Para ejecutar esta API localmente:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/blog-activity-api.git

2. Navega al directorio del proyecto:

   ```bash
   cd blog-activity-api
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

El servidor estará disponible en [http://localhost:3001](http://localhost:3001).

## Autores

* **Devyn Tubac**

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
