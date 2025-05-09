import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog Academy API",
            version: "1.0.0",
            description: "Este blog servirá como un registro organizado de los trabajos y proyectos de aprendizaje, accesible para cualquier visitante.",
            contact:{
                name: "Devyn Tubac",
                email: "dtubac-2020247@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/blogActivity/v1"
            }
        ],
    },
    apis:[
        './src/publication/publication.router.js',
        './src/comment/comment.router.js',
        './src/comment/comment.model.js',
        './src/publication/publication.model.js'
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}