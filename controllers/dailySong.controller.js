import DailySong from "../models/DailySong.js";
import Song from "../models/Song.js";

export const createDailySong = async (req, res) => {
    try {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const Songs = await Song.find();
        const songId = Songs[Math.floor(Math.random() * Songs.length)]._id;

        const dailySong = new DailySong({
            songId,
            date,
        });

        await dailySong.save();
       return ;
    } catch (err) {
        console.log(err)
    }
}

export const getDailySong = async (req, res) => {
    try {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const dailySong = await DailySong.findOne({ date }).populate('songId');
        res.status(200).json(dailySong);
    }
    catch (err) {
        res.status(408).json({ error: err.message });
    }
}