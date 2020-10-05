const Discord = require("discord.js");

module.exports = {
  name: "psx",
    description: "Info about Sony PlayStation first console",
    category: "retro consoles",
    usage: "psx",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("PlayStation X/1")
    .setColor("#c0c0c0")
    .setDescription("Released on July 7, 2000, concurrently with its successor the PlayStation 2, the PS One (stylized as PS one) was a considerably smaller, redesigned version of the original PlayStation video game console. The PS one went on to outsell all other consoles, including its successor, throughout the remainder of the year. It featured two main changes from its predecessor, the first being a cosmetic change to the console and the second being the home menu's Graphical User Interface; a variation of the GUI previously used only on PAL consoles up to that point.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
