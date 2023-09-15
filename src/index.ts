import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
app.use(express.json())
app.use('/connect', connectRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})