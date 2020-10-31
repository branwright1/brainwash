const Discord = require("discord.js");

module.exports = {
  name: "comodore",
    description: "Info about Commodore",
    category: "Retro-PC",
    usage: "bw!comodore",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Comodore")
    .setColor("#cccccc")
    .setDescription(`The Commodore 64, also known as the C64 or the CBM 64, is an 8-bit home computer introduced in January 1982 by Commodore International (first shown at the Consumer Electronics Show, in Las Vegas, January 7–10, 1982). It has been listed in the Guinness World Records as the highest-selling single computer model of all time, with independent estimates placing the number sold between 12. 5 and 17 million units. Volume production started in early 1982, marketing in August for US$595 (equivalent to $1,576 in 2019). Preceded by the Commodore VIC-20 and Commodore PET, the C64 took its name from its 64 kilobytes (65,536 bytes) of RAM. With support for multicolor sprites and a custom chip for waveform generation, the C64 could create superior visuals and audio compared to systems without such custom hardware. The C64 dominated the low-end computer market (except in the UK) for most of the 1980s. For a substantial period (1983–1986), the C64 had between 30% and 40% share of the US market and two million units sold per year, outselling IBM PC compatibles, Apple computers, and the Atari 8-bit family of computers. Sam Tramiel, a later Atari president and the son of Commodore's founder, said in a 1989 interview, "When I was at Commodore we were building 400,000 C64s a month for a couple of years. " In the UK market, the C64 faced competition from the BBC Micro and the ZX Spectrum, but the C64 was still the second most popular computer in the UK after the ZX Spectrum. Part of the Commodore 64's success was its sale in regular retail stores instead of only electronics or computer hobbyist specialty stores. Commodore produced many of its parts in-house to control costs, including custom integrated circuit chips from MOS Technology....`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
