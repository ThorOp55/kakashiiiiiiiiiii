const {
  MessageEmbed, MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton } = require('discord.js')
module.exports = {
  name: "support",
  description: "Sends you the Support Server Link",
  run: async (client, interaction, cmduser, es, ls, prefix, player, message) => {
    //things u can directly access in an interaction!
    const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
    const { guild } = member;
    
    
    try {
      let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://discord.gg/j8hXTVxwaj")
      let button_invite = new MessageButton().setStyle('LINK').setLabel('Invite this Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
      //array of all buttons
      const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
      interaction.reply({ephemeral: true, 
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setTitle(client.la[ls].cmds.info.support.title)
          .setDescription(eval(client.la[ls]["cmds"]["info"]["support"]["variable1"]))
          .setFooter(client.user.username  + ' | ThorOp', 'https://cdn.discordapp.com/attachments/887065559794057277/918244381864124436/ff55fa9a762773cb871c308a6715a748.jpg')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=784364932149280778&permissions=8&scope=bot%20applications.commands")],
        components: allbuttons
      });
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(es.footertext, es.footericon)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
      ]});
    }
  }
}
