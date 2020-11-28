const { MessageEmbed } = require('discord.js');
const kahootSpam = require('kahoot-spam');
const api = kahootSpam;

module.exports = {
  minArgs: 3,
  maxArgs: 4,
  syntaxError: 'Incorrect usage! Use `spam <Gamepin> <Bot(s)Name> <BotsCount> Optional: <True or False>`',
  name: 'spam',
  description: 'Spams the fuck of out Kahoot live.',
  aliases: ['nuke'],
  requiredPermissions: ['ADMINISTRATOR'],
  callback: (message, args) => {
    console.log(`\x1b[32mSpamming Kahoot with the pin of ${args[0]}, with the name for the bots as: ${args[1]}!\x1b[0m`);

    const intializeEmbed = new MessageEmbed()
    .setColor(`#00FF00`)
    .setTitle(`Spamming`)
    .setDescription(`Spamming Kahoot with the pin of **${args[0]}**, with the name for the bots as: **${args[1]}**!`)
    .setFooter(`Made by XoAlone`);
    message.channel.send(intializeEmbed);

    api.spam(args[0], args[1], args[2]).then(() => {
      console.log(`\x1b[32mCompleted!\x1b[0m`);
      
      const doneEmbed = new MessageEmbed()
      .setColor(`#00FF00`)
      .setTitle(`Completed`)
      .setDescription(`Successfully spammed.`)
      .setFooter(`Made by XoAlone`);
      message.channel.send(doneEmbed);
    }).catch((err) => {
      console.log(`Whoops! An error occured. ${err}`);

      const errorEmbed = new MessageEmbed()
      .setColor(`#FF0000`)
      .setTitle(`Error`)
      .setDescription(`An error has occured while trying to spam the Kahoot. ${err}`)
      .setFooter(`Made by XoAlone`);
      message.channel.send(errorEmbed);
    });
  },
};