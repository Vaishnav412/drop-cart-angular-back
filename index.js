require('dotenv').config()

require('./DB/Connection')



const express=require('express')

const router=require('./Routes/router')

const cors=require('cors')


// create server

const dropCartserver=express()

dropCartserver.use(cors())

dropCartserver.use(express.json())

dropCartserver.use(router)


const PORT=3000||process.env.PORT


dropCartserver.listen(PORT,()=>{
    console.log(`dropcart server running ${PORT}`);
})