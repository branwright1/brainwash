const Discord = require("discord.js");

module.exports = {
  name: "unix",
    description: "Info about UNIX system",
    category: "unix",
    usage: "bw!unix",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("UNIX")
    .setColor("#010101")
    .setDescription('Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.Initially intended for use inside the Bell System, AT&T licensed Unix to outside parties in the late 1970s, leading to a variety of both academic and commercial Unix variants from vendors including University of California, Berkeley (BSD), Microsoft (Xenix), Sun Microsystems (SunOS/Solaris), HP/HPE (HP-UX), and IBM (AIX). In the early 1990s, AT&T sold its rights in Unix to Novell, which then sold its Unix business to the Santa Cruz Operation (SCO) in 1995. The UNIX trademark passed to The Open Group, a neutral industry consortium founded in 1996, which allows the use of the mark for certified operating systems that comply with the Single UNIX Specification (SUS).')
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
