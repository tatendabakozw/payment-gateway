import mongoose, { ConnectOptions } from 'mongoose';
mongoose.set('strictQuery', false);
const mongoUrl = `mongodb://localhost:27017/gateway_DB`;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
