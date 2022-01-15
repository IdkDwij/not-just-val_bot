const { Client, Intents } = require('discord.js');
var auth = require('./auth.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = ".";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    if(message.content.startsWith(prefix)) {
        if (message.author.bot) {
            return;
        }
        else {
        const [cmdName, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split(/\s+/);
        console.log(cmdName);
        console.log(args);
        if (cmdName === "thetruth") {
            message.channel.send('Nathan learn node.js or you are a skill issue');
        }
        else if(cmdName === "uptime") {
            message.channel.send('Bot has been on for ' + Math.round(process.uptime()) + ' seconds')
        }
    }
    }
})

client.login(auth.token)