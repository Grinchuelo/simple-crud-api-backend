import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_DB)
    console.log('MongoDB connected')
  } catch(e) {
    console.log('Error connecting to database: ', e)
    res.status(500).json({ message: e.message })
    proccess.exit(1)
  }
}

export default connectDB