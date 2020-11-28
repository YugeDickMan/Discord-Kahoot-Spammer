const { MessageEmbed } = require('discord.js');

module.exports = {
  maxArgs: 0,
  syntaxError: 'Incorrect usage! Use `ping`',
  name: 'ping',
  description: 'Checks the bot\'s ping',
  callback: (message) => {
    const pingEmbed = new MessageEmbed()
    .setColor(`#00FF00`)
    .setTitle(`${message.client.user.username}'s Ping`)
    .setDescription(`My ping is **${message.client.ws.ping}ms**!`)
    .setFooter(`Made by XoAlone`);
    message.channel.send(pingEmbed);
  },
};