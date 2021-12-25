const { Client, Intents } = require('discord.js');
const fs = require(`fs`);
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
let prefix = "m!";
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB;
var dbs = null;
const clients = new MongoClient(url);
clients.connect(function(err) {
  console.log('Connected successfully to server');
});
const keepAlive = require(`./scripts/functions/uptime.js`);
fs.readdir(`./scripts/events/`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    console.log(file);
    let eventFunction = require(`./scripts/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => {
      eventFunction.run(client, ...args, clients, prefix)
    });
  });
});

client.login(process.env.TOKEN);
keepAlive.run();