const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {
  if(!args[0]) return;
  		let channel = args[0];
		let messages = args.slice(1).join(' ');
if (message.author.id === process.env.OWNERID) {
		if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
      if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + message`);
			client.channels.cache.get(channel).send(messages);
			return;
		}
	let protected = true;
  if(protected == true) {
if (message.member.roles.cache.some(role => role.name === '✅ Verified')) {
  if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);

 if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + message`);
			client.channels.cache.get(channel).send(messages);
			return;
}
  } else {
    if (!channel)
				return message.reply(`you need to prove a channel to send!`);
			if (!messages) return message.reply(`you need to prove message to send!`);
						 if(client.channels.cache.get(channel) === undefined) return message.reply(`please refer a channel id following this method: channel id + message`);
			client.channels.cache.get(channel).send(messages);
  }
}
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 3;
}
exports.name = async() => {
  return "send";
}
exports.desc = async() => {
  return "send a message to a channel id.";
}