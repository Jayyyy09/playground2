const request = require('request');

// Your bot's token
const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';

// The URL for the getUpdates method
const url = `https://api.telegram.org/bot${botToken}/getUpdates`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the response body (JSON format)
    const updates = JSON.parse(body);
    
    // Log the updates (you can explore the entire object)
    console.log(updates);

    // If updates exist, extract chatId from the first update
    if (updates.result && updates.result.length > 0) {
      const chatId = updates.result[0].message.chat.id;
      console.log(`Chat ID: ${chatId}`);
    } else {
      console.log("No updates available.");
    }
  } else {
    console.log('Error: ', error);
  }
const request = require('request');

// Your bot's token
const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';

// The URL for the getUpdates method
const url = `https://api.telegram.org/bot${botToken}/getUpdates`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the response body (JSON format)
    const updates = JSON.parse(body);
    
    // Log the updates (you can explore the entire object)
    console.log(updates);

    // If updates exist, extract chatId from the first update
    if (updates.result && updates.result.length > 0) {
      const chatId = updates.result[0].message.chat.id;
      console.log(`Chat ID: ${chatId}`);
    } else {
      console.log("No updates available.");
    }
  } else {
    console.log('Error: ', error);
  }
93bc6575379961fce1530fe1a46154461490553c

const request = require('request');

// Your bot's token
const botToken = '7629018491:AAFOROZgbUAGJo7xBMPIIh4-SUqpmV2lc8w';

// The URL for the getUpdates method
const url = `https://api.telegram.org/bot${botToken}/getUpdates`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the response body (JSON format)
    const updates = JSON.parse(body);
    
    // Log the updates (you can explore the entire object)
    console.log(updates);

    // If updates exist, extract chatId from the first update
    if (updates.result && updates.result.length > 0) {
      const chatId = updates.result[0].message.chat.id;
      console.log(`Chat ID: ${chatId}`);
    } else {
      console.log("No updates available.");
    }
  } else {
    console.log('Error: ', error);
  }
bc6575379961fce1530fe1a46154461490553c;
});