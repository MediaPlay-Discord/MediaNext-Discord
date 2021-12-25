const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {
  if(!args[0]) return;
if (message.author.id === process.env.OWNERID) {
			message.channel.send(args.join(' '));
			return;
		}
	let protected = false;
  if(protected == true) {
if (message.member.roles.cache.some(role => role.name === '✅ Verified')) {
  	message.channel.send(args.join(' '));
}
  } else {
    	message.channel.send(args.join(' '));
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
  return "say";
}
exports.desc = async() => {
  return "make the bot say somthing.";
}