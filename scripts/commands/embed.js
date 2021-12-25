const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {
  if(!args[0]) return;
  let color = args[0];
		let messages = args.slice(1).join(' ');
if (message.author.id === process.env.OWNERID) {
				if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();

			message.channel.send({embeds:[embed]});
			return;
		}
	let protected = true;
  if(protected == true) {
if (message.member.roles.cache.some(role => role.name === '✅ Verified')) {
  	if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();

			message.channel.send({embeds:[embed]});
			return;
}
  } else {
  	if (!color)
				return message.reply(`you need to prove a color in hex to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
				.setDescription(`${messages}`)

				.setTimestamp();

			message.channel.send({embeds:[embed]});
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
  return "embed";
}
exports.desc = async() => {
  return "send a embed message, color hex, then message.";
}