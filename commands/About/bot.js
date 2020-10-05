const Discord = require("discord.js");

module.exports = {
  name: "about",
    description: "Get some info about Brainwash",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle(`About me`)
    .setColor("#f3ce4e")
    .setDescription("Hi! My name is Brainwash, I'm infobot with knowledge about Retro Consoles, Personal Computers and Operating Systems.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
