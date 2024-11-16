const request = require('request');

const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';
const chatId = '6251179385';
const gameUrl = 'https://t.me/virtualRobotPetsBot?game=VirtualPetRobot';

//const chatId = 'USER_CHAT_ID';
//const gameUrl = 'https://your-game-url.com';

const url = `https://api.telegram.org/bot${botToken}/sendGame?chat_id=${chatId}&game_short_name=your_game_short_name&game_url=${gameUrl}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log('Game sent');
    }
});