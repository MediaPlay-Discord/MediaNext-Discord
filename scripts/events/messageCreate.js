exports.run = async(client, message, clients, prefix) => {
if(message.author.bot || message.channel.type === "DM") return;
const args = message.content.slice(prefix.length).trim().split(' ');
  if (message.content.indexOf(prefix) !== 0) {
     let cd = require(`./../functions/levelingsystem.js`);
cd.run(client, message, args, clients);
    return;
  }

	const command = args.shift().toLowerCase();
  
try {
		let commands = require(`./../commands/${command}.js`);
  commands.run(client, message, args, clients);
	} catch (err) {
		try {
			let commands = require(`./../commands/${command}.js`);
  commands.run(client, message, args, clients);
		} catch (err) {
			try {
				let commands = require(`./../commands/${command}.js`);
  commands.run(client, message, args, clients);
			} catch (err) {
        let collection = clients.db("Leveling").collection("customcommand");
   collection.find({"name":command}).toArray(function(err, docs) {
    if(docs.length == 1) {
      docs.forEach(commando => {
        message.channel.send(commando.reply
        .replace('<member.tag>',`${message.author.tag}`)
.replace('<member.id>',`${message.author.id}`)
.replace('<member>',`${message.author}`));
return;
      })
      return;
    }
    return;
  });

			}
		}
	}
}