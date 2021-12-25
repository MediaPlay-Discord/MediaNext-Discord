const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {

	await message.channel.send('ping?').then(m => {
		m.edit(`pong! \`${Date.now() - message.createdTimestamp}\`ms.`);
	});
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
  return "ping";
}
exports.desc = async() => {
  return "pong!";
}