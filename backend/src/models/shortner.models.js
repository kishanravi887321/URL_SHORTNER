import mongoose    from "mongoose";

const ShortSchema = new mongoose.Schema({
  originalUrl: {
    type: String,}
    ,
    shortCode: {
    type: String,
    required: true,
    unique: true,
    },
    shortUrl:{
        type:String,
        required:false,
    },
    createdAt: {default: Date.now, type: Date},
    expireAt: {type: Date, default: null},
});

const Short = mongoose.model("Short", ShortSchema);

export default Short;