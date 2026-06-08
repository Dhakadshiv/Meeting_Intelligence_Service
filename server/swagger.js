const express=require("express")
const router=express.Router()
const port=process.env.PORT || 3000
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
                url: "https://www.linkedin.com/safety/go?url=https%3A%2F%2Fmeeting-intelligence-service-rbnl.onrender.com%2F&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-ZDNiN2U4ZjYtMTdmYS00ZTA4LWI3YzYtZTRjMjQzMTFlNmRiXzEwMA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BPtG0na%2F8QyWTxMDlFf8QlA%3D%3D",
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