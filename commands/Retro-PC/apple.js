const Discord = require("discord.js");

module.exports = {
  name: "mac",
    description: "Info about Macintosh",
    category: "Retro-PC",
    usage: "bw!mac",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Apple Macintosh")
    .setColor("#FFFFFF")
    .setDescription(`The Macintosh (commonly shortened to Mac since 1998) is a family of personal computers designed, manufactured, and sold by Apple Inc. since January 1984. The original Macintosh is the first successful mass-market personal computer to have featured a graphical user interface, built-in screen, and mouse. Apple sold the Macintosh alongside its popular Apple II family of computers for almost ten years until the latter was discontinued in 1993. Early Macintosh models were expensive, hindering competitiveness in a market dominated by the much cheaper Commodore 64 for consumers, as well as the IBM Personal Computer and its accompanying clone market for businesses, although they were less expensive than the Xerox Alto and other computers with graphical user interfaces that predated the Mac. Macintosh systems were successful in education and desktop publishing, making Apple the second-largest PC manufacturer for the next decade. In the early 1990s, Apple introduced the Macintosh LC II and Color Classic which were price-competitive with Wintel machines at the time. However, the introduction of Windows 3. 1 and Intel's Pentium processor, which beat the Motorola 68040 used in then-current Macintoshes in most benchmarks, gradually took market share from Apple, and by the end of 1994 Apple was relegated to third place as Compaq became the top PC manufacturer. Even after the transition to the superior PowerPC-based Power Macintosh line in the mid-1990s, the falling prices of commodity PC components, poor inventory management with the Macintosh Performa, and the release of Windows 95 contributed to continued decline of the Macintosh user base. Upon his return to the company, Steve Jobs led Apple to consolidate the complex line of nearly twenty Macintosh models in mid-1997 (including models made for specific regions) down to four in mid-1999: the Power Macintosh G3, iMac, 14....`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
