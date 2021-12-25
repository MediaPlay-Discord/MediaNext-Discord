const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
	if (message.author.id === process.env.OWNERID) {
			const deleteCount = parseInt(args[0], 10);

			// Ooooh nice, combined conditions. <3
			if (!deleteCount || deleteCount < 1 || deleteCount > 100)
				return message.reply(
					'Please provide a number between 1 and 100 for the number of messages to delete'
				);

			// So we get our messages, and delete them. Simple enough, right?
			const fetched = await message.channel.messages.fetch({
				limit: deleteCount
			});
			message.delete();
			message.channel
				.bulkDelete(fetched)
				.catch(error =>
					message.reply(`Couldn't delete messages because of: ${error}`)
				);

			return;
		}
		if (!message.member.permissions.has('MANAGE_MESSAGES'))
			return message.reply("You can't use that command!");

		// get the delete count, as an actual number.
		const deleteCount = parseInt(args[0], 10);

		// Ooooh nice, combined conditions. <3
		if (!deleteCount || deleteCount < 1 || deleteCount > 100)
			return message.reply(
				'Please provide a number between 1 and 100 for the number of messages to delete'
			);

		// So we get our messages, and delete them. Simple enough, right?
		const fetched = await message.channel.messages.fetch({
			limit: deleteCount
		});
		message.delete(' ');
		message.channel
			.bulkDelete(fetched)
			.catch(error =>
				message.reply(`Couldn't delete messages because of: ${error}`)
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
  return "purge";
}
exports.desc = async() => {
  return "purge delete message, up time 100 messages per time, less than 2 weeks old.";
}