const Discord = require("discord.js");

module.exports = {
  name: "bsd",
    description: "Info about BSD",
    category: "unix",
    usage: "bw!bsd",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Berkkely Software Distribution")
    .setColor("#010101")
    .setDescription('The Berkeley Software Distribution (BSD) is a discontinued operating system based on Research Unix, developed and distributed by the Computer Systems Research Group (CSRG) at the University of California, Berkeley. The term "BSD" commonly refers to its descendants, including FreeBSD, OpenBSD, NetBSD, and DragonFly BSD.') 
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
