const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
if (!message.member.roles.cache.some(r => ['✅ Verified'].includes(r.name)))
			return message.reply(
				`please become verified member to use this command!`
			);
		const type = args.join(' ');
		if (!type) return message.reply(`air suggestion nice`);
		message.reply(`thanks , your suggestion is been sending...`);
		const suggestions = new Discord.MessageEmbed()
			.setTitle(`📨 New suggestion`)
			.setDescription(`by ${message.author.tag} \n ${type}`)
			.addField('comment', 'no comment at this moment', true)
			.setTimestamp();
		const msg = client.channels.cache
			.get('810012368608034826')
			.send({embeds: [suggestions]);
		(await msg).react('⬆');
		(await msg).react('⬇');

		const id = (await msg).id;

      const collection = clients.db("Leveling").collection("suggestion");

       collection.insertMany([{author: message.author.tag,suggestion: type,status: 'false',comment: '** **',id:id}], function(err, result) {
  });
 

		return;
};