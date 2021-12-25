const {MessageEmbed} = require('discord.js');
const google = require('google-it');
exports.run = async(client, message, args, clients) => {
var search = args.join(' ');
  google({'query': search}).then(results => {
const embed = new MessageEmbed()
.setTitle(`google search`);

results.forEach(raw => {
embed.addField(`${raw.title}`, `${raw.snippet} [link](${raw.link})`, true);

});
console.log(embed);
message.channel.send({embeds:[embed]});
}).catch(e => {
console.log(e)})
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
  return "1";
}
exports.desc = async() => {
  return "google! find somthing else.";
}