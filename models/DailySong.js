import mongoose from 'mongoose';
const dailySongSchema = new mongoose.Schema({
  songId: { type: mongoose.Schema.Types.ObjectId, ref: 'Song', required: true },
  date: { type: Date, required: true, unique: true },
});

export default mongoose.model('DailySong', dailySongSchema);