import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  bufferCommands: false,
};
const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/blogapp';
mongoose.connect(MONGO, options).then(()=>{
  console.log('Connected to MongoDB');
  app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
}).catch(err=>{
  console.error('Mongo connection error', err);
});
