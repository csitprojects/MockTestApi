import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });

  connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit();
  });
};

export default connectDB;