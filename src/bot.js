const { Client, Intents } = require('discord.js');
var auth = require('./auth.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = auth.prefix;

var seconds;
var UpdateLog = "Added gogetsomebitches"
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    console.log(UpdateLog)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const NewMessage = message.content;
    
    if(!message.content.startsWith(prefix)) return;
    const [cmdName, ...args] = message.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    console.log(cmdName);
    console.log(args);
    if (cmdName === "thetruth") message.channel.send('Your iphone is a tracking device for the chinese government');

    else if(cmdName === "uptime") {
        seconds = Math.round(process.uptime());
        var h = Math.floor(seconds / 3600).toString().padStart(2,'0'),
        m = Math.floor(seconds % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(seconds % 60).toString().padStart(2,'0');
        message.channel.send('Bot has been on for ' + h + ' hours ' + m + ' minutes' + ' and ' + s + ' seconds')
    }
    else if (cmdName === "bitches") {
      message.channel.send('Bitches Check for ' + args + "");
    sleep(1000).then(() => {
        message.channel.send("...")
      });
    sleep(2000).then(() => {
        message.channel.send("...")
      });
    sleep(2000).then(() => {
        message.channel.send("...")
      });
    sleep(2000).then(() => {
        message.channel.send("...")
      });
      sleep(2000).then(() => {
        message.channel.send(args + "Has no bitches confirmed");
      });
    }
})

client.login(auth.token)
