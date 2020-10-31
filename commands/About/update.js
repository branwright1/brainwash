const Discord = require("discord.js");

module.exports = {
  name: "update",
    description: "Get info about new Opal version",
    category: "info",
    usage: "update",
  run: async(client, message, args) => {
    const update = new Discord.MessageEmbed()
    .setColor("#f3ce4e")
    .setTitle("Upate: 1.0")	  
    .setDescription("- Added `about` command\n- Added `update` command")
    message.guild.channels.cache.get('771138008136810506').send(update);
  }
}
