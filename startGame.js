const axios = require('axios');

const botToken = '8156250890:AAElfC9mxLv3FYLnqzhDEM5U7Q0F6a13IMg';
const chatId = '6251179385';
const gameUrl = 'https://your-game-url.com'; // Update this with your actual game URL
const gameShortName = 'your_game_short_name'; // Update with your game short name

const url = `https://api.telegram.org/bot${botToken}/sendGame`;

axios.post(url, {
    chat_id: chatId,
    game_short_name: gameShortName,
    game_url: gameUrl
})
.then(response => {
    console.log('Game sent');
})
.catch(error => {
    console.error('Error sending game:', error);
});


/*const request = require('request');

const botToken = '8156250890:AAElfC9mxLv3FYLnqzhDEM5U7Q0F6a13IMg';
const chatId = '6251179385';
const gameUrl = 't.me/TONDroid_Bot/TONDroid';

//const chatId = 'USER_CHAT_ID';
//const gameUrl = 'https://your-game-url.com';

const url = `https://api.telegram.org/bot${botToken}/sendGame?chat_id=${chatId}&game_short_name=your_game_short_name&game_url=${gameUrl}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log('Game sent');
    }
});*/

/*const request = require('request');

const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';
const chatId = '6251179385'; // Correct chat ID
const gameShortName = 'VirtualPetRobot'; // Correct game short name (registered in BotFather)

const url = `https://api.telegram.org/bot${botToken}/sendGame?chat_id=${chatId}&game_short_name=${gameShortName}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log('Game sent');
    } else {
        console.log('Error:', error);
    }
=======
const request = require('request');

const botToken = '8156250890:AAElfC9mxLv3FYLnqzhDEM5U7Q0F6a13IMg';
const chatId = '6251179385';
const gameUrl = 't.me/TONDroid_Bot/TONDroid';

//const chatId = 'USER_CHAT_ID';
//const gameUrl = 'https://your-game-url.com';

const url = `https://api.telegram.org/bot${botToken}/sendGame?chat_id=${chatId}&game_short_name=your_game_short_name&game_url=${gameUrl}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log('Game sent');
    }
});

/*const request = require('request');

const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';
const chatId = '6251179385'; // Correct chat ID
const gameShortName = 'VirtualPetRobot'; // Correct game short name (registered in BotFather)

const url = `https://api.telegram.org/bot${botToken}/sendGame?chat_id=${chatId}&game_short_name=${gameShortName}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log('Game sent');
    } else {
        console.log('Error:', error);
    }
>>>>>>> 00672fb49762540cd6314908ae4c7145019c6893
});*/