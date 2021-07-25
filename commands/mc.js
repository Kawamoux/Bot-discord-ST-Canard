bot.on('message', function (message) {
    if (message.content === '-mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @everyone')
    }
})
