import mongoose from 'mongoose';
const guessSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'GameSession', required: true },
  songId: { type: mongoose.Schema.Types.ObjectId, ref: 'Song', required: true },
  guessedTitle: { type: String },
  isCorrect: { type: Boolean, default: false },
  guessedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Guess', guessSchema);
