import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
  idSpoty: { type: String, required: true },
});

export default mongoose.model("Song", songSchema);