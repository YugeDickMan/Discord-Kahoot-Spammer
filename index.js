// Discord
const discord = require('discord.js');
const client = new discord.Client();
// WOK
const wokc = require('wokcommands');
require('dotenv').config()

// Initialize the client
client.on('ready', () => {
  // Log it to console
  console.log(`\x1b[32mLogged in as ${client.user.tag}!\x1b[0m`);
  // Set the bot's activity
  client.user.setActivity({
    name: 'Kahoot.it',
    type: 'PLAYING',
  });
  // Initialize wokcommands
  new wokc(client, 'commands');
});

// Log into the bot
client.login(process.env.TOKEN);