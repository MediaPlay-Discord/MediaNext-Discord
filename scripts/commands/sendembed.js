const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {
  if(!args[0]) return;
  	let channel = args[0];
		let color = args[1];
		let messages = args.slice(2).join(' ');
if (message.author.id === process.env.OWNERID) {
		if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();
 if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + color in hex + message`);
			client.channels.cache.get(channel).send({embeds:[embed]});
			return;
		}
	let protected = true;
  if(protected == true) {
if (message.member.roles.cache.some(role => role.name === '✅ Verified')) {
  if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();
  if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + color in hex + message`);
			client.channels.cache.get(channel).send({embeds:[embed]});
			return;
}
  } else {
   if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();

		
       if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + color in hex + message`);
			client.channels.cache.get(channel).send({embeds:[embed]});
			return;
  }
	return;
};
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 3;
}
exports.name = async() => {
  return "sendembed";
}
exports.desc = async() => {
  return "send the embed into another channel, channel id, color hex, the nmessage.";
}