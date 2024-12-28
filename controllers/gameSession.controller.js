import GameSession from "../models/GameSession.js";

export const createGameSession = async (userId) => {
    try {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const gameSession = new GameSession({
            userId,
            createdAt: date,
        });
        await gameSession.save();
        return gameSession;
    } catch (err) {
        return err;
    }
}