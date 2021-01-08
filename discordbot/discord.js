onst Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('im online bitch');
});
client.on('message', message => {
	console.log(message.content);
});
if (message.content === 'mariah') {
	message.channel.send('ugh bae i love you MWA :KISS:');
}

client.login('Nzg2OTY1Mzg5MjQyNDAwNzY4.X9OEoQ.DAeRUznuH46bXC0lE6jzMCo1HSE');