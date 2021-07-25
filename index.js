const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', (message) => {
    if (message.content === '??mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @everyone')
    }
})

client.on('message', (message) => {
    if (message.content === `??pray`) {
    message.delete({ timeout: 0000 })
    message.reply('est entrain de prier le Saint-Canard !  :pray: :compass: :duck:')
    }
})

client.login(process.env.TOKEN);
