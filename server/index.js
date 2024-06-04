// THESE ARE NODE APIs WE WILL USE
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

// CREATE OUR SERVER
dotenv.config()
const PORT = process.env.PORT || 8000;
const app = express()

// SETUP THE MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
const authRouter = require('./routes/auth-router')
app.use('/auth', authRouter)
const debatesRouter = require('./routes/debates-router')
app.use('/api', debatesRouter)

// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', (err) => console.log('Error, DB not connected'));
db.on('connected', () => console.log('connected to mongo'));
db.on('disconnected', () => console.log('Mongo is disconnected'));
db.on('open', () => console.log('Connection Made!'));

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


