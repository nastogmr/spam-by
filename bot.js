const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589070686346149901")
setInterval(function() {
channel.send(`spaaaaaaaaaaaaaaaaaaaaaaaaam spam سبااااااااااااااااااااااااااااااااااااااااام سبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
