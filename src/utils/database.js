import mongoose from "mongoose";

const URI = "mongodb+srv://admin:xHss5EXkVGTEJouR@cluster0.7h85doc.mongodb.net/";

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
