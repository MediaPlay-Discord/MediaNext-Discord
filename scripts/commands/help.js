const Discord = require('discord.js');
const path = require('path');
exports.run = async(client, message, args, clients) => {
  const row = new Discord.MessageActionRow();
  const b1 =	new Discord.MessageButton()
					.setCustomId('helppub')
					.setLabel('public')
					.setStyle('PRIMARY');
			
       const b2 = new Discord.MessageButton()
					.setCustomId('helpowner')
					.setLabel('Owner only')
					.setStyle('PRIMARY');
      const b3 =	new Discord.MessageButton()
					.setCustomId('helpstaff')
					.setLabel('staff')
					.setStyle('PRIMARY');
			
       const b4 = 	new Discord.MessageButton()
					.setCustomId('helpverifiedmem')
					.setLabel('verified member')
					.setStyle('PRIMARY');
           const b5 = 	new Discord.MessageButton()
					.setCustomId('helpcuscmd')
					.setLabel('custom command')
					.setStyle('PRIMARY');
		row.addComponents(b1);
    		row.addComponents(b2);
            	row.addComponents(b3);
              	row.addComponents(b4);
                	row.addComponents(b5);
let embed = new Discord.MessageEmbed()
.setTitle(`MediaNext's command`)
.addField(`please`, `click one of the button below:`, true);
message.channel.send({embeds :[embed], components: [row]});
return;
};
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 1;
}
exports.name = async() => {
  return "help";
}
exports.desc = async() => {
  return "show this message";
}