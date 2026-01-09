import mongoose    from "mongoose";

const ShortSchema = new mongoose.Schema({
  originalUrl: {
    type: String,}
    ,
    shortUrl: {
    type: String,
    required: true,
    unique: true,
    },
    createdAt: {default: Date.now, type: Date},
    expireAt: {type: Date, default: null},
});

const Short = mongoose.model("Short", ShortSchema);

export default Short;