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
    .setThumbnail(client.user.avatarURL())
    .setDescription("Hello, My name is Brainwash and I'm infobot with knowledge about Retro Consoles, Personal Computers and Operating Systems.\n\n*type ``bw!help`` and get more info about my commands*.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
