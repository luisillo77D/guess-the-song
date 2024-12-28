import app from './app.js';
import {connectdb} from './db.js';
import {createDailySong} from './controllers/dailySong.controller.js';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectdb();

//cada 24 horas se ejecuta la funcion createDailySong
setInterval(async () => {
  const date = new Date();
  if(date.getHours() === 0 && date.getMinutes() === 0){
    await createDailySong();
  }
}, 1000 * 60 * 60 * 24);