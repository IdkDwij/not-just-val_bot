const { Client, Intents } = require('discord.js');
var auth = require('./auth.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = ".";

var idksec = 0;
var seconds;
var UpdateLog = "Added minutes and hours to .uptime, changed .thetruth so it says the real truth"

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    console.log(UpdateLog)
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const [cmdName, ...args] = message.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    console.log(cmdName);
    console.log(args);
    if (cmdName === "thetruth") message.channel.send('Your iphone is a tracking device for the chinese government');
    
    else if(cmdName === "uptime") {
        seconds = Math.round(process.uptime()) - idksec;
        message.channel.send('Bot has been on for ' + Math.floor(seconds / 3600) + ' hours ' + Math.floor(seconds / 60) + ' minutes' + ' and ' + seconds + '(ignore it if it is above 60 :P) seconds')
    }
})

client.login(auth.token)
