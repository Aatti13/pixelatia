import mongoose from "mongoose";

class Database {
  constructor() {
    this.mongoURI = process.env.MONGO_URI;
  }
  async connectDB() {
    try{
      await mongoose.connect(this.mongoURI);
      console.log('DB connection successful');
    }catch(error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

export default Database;