import Song from "../models/Song.js";

export const createSong = async (req, res) => {
    try {
        const { idSpoty } = req.body;
    
        const song = new Song({
        idSpoty,
        });
    
        await song.save();
        res.status(201).json({ message: 'Song created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

export const getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    