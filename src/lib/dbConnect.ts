import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const connectDB = async (): Promise<void> => {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set');
    return;
  }

  if (connection.isConnected) {
    console.log('Using existing database connection!');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL!);

    connection.isConnected = db.connections[0]?.readyState;

    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Databse connection failed!', error);
    process.exit(1);
  }
};
