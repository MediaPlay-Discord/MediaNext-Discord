const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
if (!message.member.roles.cache.some(r => ['✅ Verified'].includes(r.name)))
			return message.reply(
				`please become verified member to use this command!`
			);
      		const id = args[0];
		const comment = args.slice(1).join(' ');
            const collection = clients.db("Leveling").collection("suggestion");
             collection.find([id:id}], function(err, docs) {
if(docs.length == 0) return message.reply(`no suggestion found!`);
if(docs.length == 1) {
  if (!comment) return message.reply(`air suggestion comment nice`);

		message.reply(`thanks , your comment is been sending...`);
docs.forEach(raw => {
  if(raw.status !== false) return message.reply(`suggest already answered!`);
  var type = raw.suggestion;
  var user = raw.author;
  var comments = raw.comment;
await collection.updateOne({ id:id }, { $set: { comment: message.author.tag + ': ' + comment + '/n' } });
await collection.find({id:id}).toArray(async (err, docs) => {
  const suggestions = new Discord.MessageEmbed()
			.setTitle(`📨 New suggestion`)
			.setDescription(`by ${user} \n ${type}`)
			.addField('comment', comments.split("/n"), true)
			.setTimestamp();

      client.channels.cache
			.get('810012368608034826')
			.messages.fetch({ around: id, limit: 1 })
			.then(msg => {
				const fetchedMsg = msg.first();
				fetchedMsg.edit({embeds: [suggestions]});
			});
})
		
})
}
  });
		
		return;
};