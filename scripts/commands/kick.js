const Discord = require('discord.js');
exports.run = async (client, message, args, clients) => {
if (message.author.id === process.env.OWNERID) {
		

			let member = message.mentions.members.first();
			if (!member)
				return message.reply('Please mention a valid member of this server');
			if (!member.kickable)
				return message.reply(
					'I cannot kick this user! Do they have a higher role? Do I have kick permissions?'
				);

			let reason = args.slice(1).join(' ');
			if (!reason)
				return message.reply('Please indicate a reason for the kick!');

			await member
				.kick(reason)
				.catch(error =>
					message.reply(
						`Sorry ${message.author} I couldn't kick because of : ${error}`
					)
				);
			message.reply(
				`${member.user.tag} has been kicked by ${
					message.author.tag
				} because: ${reason}`
			);

			return;
		}
		if (!message.member.permissions.has('KICK_MEMBERS'))
			return message.reply("You can't use that command!");

		let member = message.mentions.members.first();
		if (!member)
			return message.reply('Please mention a valid member of this server');
		if (!member.kickable)
			return message.reply(
				'I cannot kick this user! Do they have a higher role? Do I have kick permissions?'
			);

		let reason = args.slice(1).join(' ');
		if (!reason) return message.reply('Please indicate a reason for the kick!');

		await member
			.kick(reason)
			.catch(error =>
				message.reply(
					`Sorry ${message.author} I couldn't kick because of : ${error}`
				)
			);
		message.reply(
			`${member.user.tag} has been kicked by ${
				message.author.tag
			} because: ${reason}`
		);

		return;
};
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 4;
}
exports.name = async() => {
  return "kick";
}
exports.desc = async() => {
  return "kick a member";
}