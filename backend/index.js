const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth.js')

dotenv.config()
const app = express()

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('CONNECTED TO MONGODB')
}

connectToMongo()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

// ROUTES
app.use('/v1/auth', authRoute)

app.listen(8000, () => {
  console.log('Server is running')
})
