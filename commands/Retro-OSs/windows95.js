const Discord = require("discord.js");

module.exports = {
  name: "win95",
    description: "Info about BSD",
    category: "DOS",
    usage: "bw!win95",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Microsoft's Windows 95")
    .setColor("#010101")
    .setDescription("Windows 95 is a consumer-oriented operating system developed by Microsoft as part of its Windows 9x family of operating systems. The first operating system in the 9x family, it is the successor to Windows 3.1x, and was released to manufacturing on August 15, 1995, and generally to retail on August 24, 1995. Windows 95 merged Microsoft's formerly separate MS-DOS and Microsoft Windows products, and featured significant improvements over its predecessor, most notably in the graphical user interface (GUI) and in its simplified `plug-and-play` features. There were also major changes made to the core components of the operating system, such as moving from a mainly cooperatively multitasked 16-bit architecture to a 32-bit preemptive multitasking architecture, at least when running only 32-bit protected mode applications.") 
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
