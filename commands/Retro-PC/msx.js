const Discord = require("discord.js");

module.exports = {
  name: "msx",
    description: "Info about MSX",
    category: "Retro-PC",
    usage: "bw!msx",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("MSX")
    .setColor("#c3efcc")
    .setDescription(`MSX is a standardized home computer architecture, announced by Microsoft and ASCII Corporation on June 16, 1983. It was initially conceived by Microsoft as a product for the Eastern sector, and jointly marketed by Kazuhiko Nishi, then vice-president at Microsoft and director at ASCII Corporation. Microsoft and Nishi conceived the project as an attempt to create unified standards among various home computing system manufacturers of the period, in the same fashion as the VHS standard for home video tape machines.MSX systems were popular in Japan and several other countries. Sony was the primary manufacturer of MSX systems at the time of release, and throughout most of the products lifespan, producing more units than any other manufacturer. Eventually 5 million MSX-based units were sold in Japan alone. Despite Microsoft's involvement, few MSX-based machines were released in the United States.The meaning of the letters M-S-X remains a matter of debate. In 2001, Kazuhiko Nishi recalled that many assumed it was derived from "Microsoft extended", referring to the built-in Microsoft Extended BASIC (MSX BASIC). Others believed it stood for "Matsushita-Sony". He said that the team's original definition was "Machines with Software eXchangeability". (In 1985 he gave a conflicting definition, that he named MSX after the MX missile.)
Before the success of Nintendo's Family Computer, MSX was the platform for which major Japanese game studios such as Konami and Hudson Soft produced video games. The Metal Gear series, for example, was first written for MSX hardware.`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
