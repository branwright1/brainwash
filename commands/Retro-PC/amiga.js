const Discord = require("discord.js");

module.exports = {
  name: "amiga",
    description: "Info about Amiga",
    category: "Retro-PC",
    usage: "bw!amig",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Amiga")
    .setColor("#0050A0")
    .setDescription(`The Amiga is a family of personal computers introduced by Commodore in 1985. The original model was one of a number of 16/32- and 32-bit computers that featured 256 KB or more of RAM, mouse-based GUIs, and significantly improved graphics and audio over 8-bit systems. This wave included the Atari ST—released the same year—Apple's Macintosh, and later the Apple IIGS. Based on the Motorola 68000 microprocessor, the Amiga differed from its contemporaries through the inclusion of custom hardware to accelerate graphics and sound, including sprites and a blitter, and a pre-emptive multitasking operating system called AmigaOS. The Amiga 1000 was released in July 1985, but a series of production problems kept it from becoming widely available until early 1986. The best selling model, the Amiga 500, introduced in 1987 (along with the more expandable / professional oriented Amiga 2000) became one of the leading home computers of the late 1980s and early 1990s with four to six million sold. The A3000 was introduced in 1990, followed by the A500+, and the A600 in March 1992. Finally, the A1200 and the A4000 were released in late 1992. The platform became particularly popular for gaming and programming demos. It also found a prominent role in the desktop video, video production, and show control business, leading to video editing systems such as the Video Toaster. The Amiga's native ability to simultaneously play back multiple digital sound samples made it a popular platform for early tracker music software. The relatively powerful processor and ability to access several megabytes of memory enabled the development of 3D rendering packages, including LightWave 3D, Imagine, Aladdin4D, TurboSilver and Traces, a predecessor to Blender....`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
