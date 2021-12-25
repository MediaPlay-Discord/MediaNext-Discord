const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
 const used = process.memoryUsage().heapUsed / 1024 / 1024;
message.channel.send(`The server uses approximately ${Math.round(used * 100) / 100}/500 MB`);
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
  return "ram";
}
exports.desc = async() => {
  return "discover ram usage.";
}