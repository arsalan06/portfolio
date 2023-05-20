import mongoose from 'mongoose';

export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.MONGODB_URI as string)
    .catch((err) => console.log(err));

  console.log('Mongoose Connection Established');

  return conn;
};
