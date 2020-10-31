const Discord = require("discord.js");

module.exports = {
  name: "dos",
    description: "Info about DOS",
    category: "DOS",
    usage: "bw!dos",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("DOS")
    .setColor("#010101")
    .setDescription("MSDOS. SYS is a vital system file on MS-DOS and Windows 9x operating systems. In versions of MS-DOS from 1. 1x through 6. 22, the file comprised the MS-DOS kernel and is responsible for file access and program management. MSDOS. SYS is loaded by the DOS BIOS IO. SYS as part of the boot procedure. In some OEM versions of MS-DOS, the file is named MSDOS. COM. In Windows 95 (MS-DOS 7. 0) through Windows ME (MS-DOS 8. 0), the DOS kernel has been combined with the DOS BIOS into a single file, IO. SYS (aka WINBOOT. SYS), while MSDOS. SYS became a plain text file containing boot configuration directives instead. If a WINBOOT. INI file exists, the system will retrieve these configuration directives from WINBOOT. INI rather than from MSDOS. SYS. When Windows 9x is installed over a preexisting DOS install, the Windows file may be temporarily named MSDOS. W40 for as long as Windows' dual-boot feature has booted the previous OS. Likewise, the MSDOS. SYS of the older system is named MSDOS. DOS for as long as Windows 9x is active. Some DOS utilities expect the MSDOS. SYS file to have a minimal file size of at least 1 KB. This is the reason why a large dummy comment is typically found in the MSDOS. SYS configuration file since Windows 95. By default, the file is located in the root directory of the bootable drive/partition (normally C:\ for hard disks) and has the hidden, read-only, and system file attributes set.") 
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
