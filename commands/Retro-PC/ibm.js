const Discord = require("discord.js");

module.exports = {
  name: "ibm",
    description: "Info about IBM PC",
    category: "Retro-PC",
    usage: "bw!ibm",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("IBM")
    .setColor("#e3e0e3")
    .setDescription(`The IBM PCjr (pronounced "PC junior") is a home computer that was produced and marketed by IBM from March 1984 to May 1985, intended as a lower-cost variant of the IBM PC with hardware capabilities better suited for video games, in order to compete more directly with other home computers such as the Apple II and Commodore 64.
It retains the IBM PC's 8088 CPU and BIOS interface, but provides enhanced graphics and sound, ROM cartridge slots, built-in joystick ports, and an infrared wireless keyboard. The PCjr supports expansion via "sidecar" modules, which are attached to the side of the unit.
Despite widespread anticipation, the PCjr was ultimately unsuccessful in the market. It is only partially IBM compatible, limiting support for the IBM's vast software library, its chiclet keyboard was widely criticized for its poor quality, expandability is limited, and it was initially offered with a maximum of 128 kB of RAM, insufficient for many PC programs.`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
