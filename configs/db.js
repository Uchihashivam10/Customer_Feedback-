
const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://khatushyamji:khatushyamji@database.swqmry3.mongodb.net/EcommerceFeedback?retryWrites=true&w=majority",{
            usenewUrlParser:true,
            // useUnifiedTopology:true,
        });
        console.log(`MongoDB is connect: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports=connectDB;