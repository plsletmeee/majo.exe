const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
 name: "servers",
 aliases: ["guilds"],
 description: "Displays total servers where I'm",
 category: "General",
 usage: "servers",
 run: async (client, message, args) => {
  try {
   const embed = new MessageEmbed() // Prettier
    .setTitle(`${client.bot_emojis.rocket} I'm in \`${client.guilds.cache.size}\` servers!`)
    .setFooter(
     `Requested by ${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    )
    .setImage("https://media.discordapp.net/attachments/710425657003212810/884064564034023454/Screenshot_2021-09-05-15-16-44-22_7c6675ada7b05a8d2d5c5ffa2a487337.jpg")
    .setColor("RANDOM")
    .setTimestamp();
   const row = new MessageActionRow().addComponents(
    new MessageButton() // Prettier
     .setURL(`https://discord.com/oauth2/authorize/?permissions=${client.config.permissions}&scope=${client.config.scopes}&client_id=${client.user.id}`)
     .setEmoji(client.bot_emojis.giveaway)
     .setLabel("Invite me!")
     .setStyle("LINK")
   );
   message.reply({ embeds: [embed], components: [row] });
  } catch (err) {
   console.log(err);
   message.reply({ embeds: [client.command_error_embed] });
  }
 },
};
