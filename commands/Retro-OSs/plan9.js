const Discord = require("discord.js");

module.exports = {
  name: "plan9",
    description: "Info about Plan 9 from Bell Labs",
    category: "unix",
    usage: "bw!pln9",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Plan 9 from Bell Labs")
    .setColor("#d0d0d0")
    .setDescription(`Plan 9 from Bell Labs is a distributed operating system, originating in the Computing Science Research Center (CSRC) at Bell Labs in the mid-1980s, and building on UNIX concepts first developed there in the late 1960s. The final official release was in early 2015.
Under Plan 9, UNIX's everything is a file metaphor is extended via a pervasive network-centric filesystem, and the cursor-addressed, terminal-based I/O at the heart of UNIX-like operating systems is replaced by a windowing system and graphical user interface without cursor addressing, although rc, the Plan 9 shell, is text-based.
The name Plan 9 from Bell Labs is a reference to the Ed Wood 1959 cult science fiction Z-movie Plan 9 from Outer Space. (The name of the project's mascot, “Glenda, the Plan 9 Bunny”, is presumably a reference to Wood's film Glen or Glenda.) The system continues to be used and developed by operating system researchers and hobbyists.`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
