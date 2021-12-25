const Discord = require('discord.js');
const math = require('mathjs');
exports.run = async(client, message, args, clients) => {
	if (!args[0]) return message.reply(`please provided a question.`);
		let answer;

		try {
			answer = math.evaluate(args.join(''));
		} catch (e) {
			message.reply(`please provide **VAILD** question.`);
			return;
		}
		const Embed = new Discord.MessageEmbed()
			.setTitle(`Calculator`)
			.addField('question', `\`\`\` ${args.join(' ')} \`\`\``, false)
			.addField('answer', `\`\`\` ${answer} \`\`\``, false)
			.setTimestamp();
		message.channel.send(Embed);
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
  return "calc";
}
exports.desc = async() => {
  return "calculator somthing(fun only)";
}