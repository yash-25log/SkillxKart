const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://skillxkart:skillxkart1234@cluster0.lzwqvrb.mongodb.net/", {
      autoIndex: true,
    });
   console.log("DB connected successfully!");
  } catch (error: any) {
    console.error(`${error.message}`);
  }
};

module.exports = dbConnect;
