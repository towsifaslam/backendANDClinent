import mongoose from "mongoose";

const db = async()=>{

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connection to ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}
export default db;