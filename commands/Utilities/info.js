const Discord = require("discord.js");

module.exports = {
  name: "profile",
    description: "User profile",
    category: "utilities",
    usage: "profile",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle(`About me`)
    .setColor("#f3ce4e")
    .setDescription("placeholder")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
