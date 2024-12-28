import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Guess from "../models/Guess.js";
import GameSession from "../models/GameSession.js";
import {createGameSession} from "./gameSession.controller.js";

export const register =async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      passwordHash: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });
    
        const isValidPassword = await bcrypt.compare(password, user.passwordHash);
        if (!isValidPassword) return res.status(401).json({ message: 'Invalid credentials' });

        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const guess = await GameSession.findOne({userId:user._id, createdAt: date});
        if(!guess) {const gameSession = await createGameSession(user._id);
        }else{
            console.log("ya existe una sesion de juego")
        }
        
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
    
        res.status(200).json({ token });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}
