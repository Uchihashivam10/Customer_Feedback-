const mongoose=require("mongoose");
//review schema
const NewReviewSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});
mongoose.model("review",NewReviewSchema);