const express=require("express")
const router=express.Router()
const port=process.env.PORT 
const swaggerUi=require("swagger-ui-express")
const swaggerJsdoc=require("swagger-jsdoc")

const options={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title:"Meeting Management API",
            version:"1.0.0",
            description:"API documentation for Meeting Management System"
        },
        tags:[
            {
                name:"Auth",
                description:"Authentication related endpoints"
            },
            {
                name:"Meeting",
                description:"Meeting management endpoints"
            },
            {
                name:"ActionItem",
                description:"Action item management endpoints"
            },            {
                name:"Analysis",
                description:"Meeting analysis endpoints"
            },
            {
                name: "Evaluation",
            description: "Project evaluation endpoints"
          }

        ],
        servers:[
            {
                url: `http://localhost:${port}`,
                description: "Development server"
            }
        ],
        components:{
            securitySchemes:{
                BearerAuth:{
                    type:"http",
                    scheme:"bearer",
                    bearerFormat:"JWT"
                },
                ApiKeyAuth:{
                    type:"apiKey", 
                    in:"header",
                    name:"x-api-key",
                    description:"API key authentication"
                }
            }
        }
    },
    apis:[
        "./server/routes/*.js"
    ]
}
const swaggerSpec=swaggerJsdoc(options)
require("swagger-model-validator")(swaggerSpec)

router.get("/json",(req,res)=>{
    res.setHeader("Content-Type","application/json")
    res.send(swaggerSpec)
})

router.use("/",swaggerUi.serve , swaggerUi.setup(swaggerSpec))

module.exports=router