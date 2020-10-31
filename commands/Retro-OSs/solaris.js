const Discord = require("discord.js");

module.exports = {
  name: "solaris",
    description: "Info about Solaris",
    category: "unix",
    usage: "bw!solaris",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Oracle Solaris")
    .setColor("#010101")
    .setDescription("Solaris is a proprietary Unix operating system originally developed by Sun Microsystems. It superseded the company's earlier SunOS in 1993. In 2010, after the Sun acquisition by Oracle, it was renamed Oracle Solaris.Solaris is known for its scalability, especially on SPARC systems, and for originating many innovative features such as DTrace, ZFS and Time Slider.Solaris supports SPARC and x86-64 workstations and servers from Oracle and other vendors. Solaris was registered as compliant with UNIX 03 until 29 April 2019. Historically, Solaris was developed as proprietary software. In June 2005, Sun Microsystems released most of the codebase under the CDDL license, and founded the OpenSolaris open-source project. With OpenSolaris, Sun wanted to build a developer and user community around the software.")     
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
