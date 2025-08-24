import express from "express"
import 'dotenv/config'
import productRoutes from './routes/product.routes.js'
import connectDB from './config/db.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productRoutes)

connectDB()
app.listen(3000, () => console.log('Server is running on PORT 3000'))