bot.on('message', function (message) {
    if (message.content === '-pray') {
    message.delete({ timeout: 0000 })
    message.reply('est entrain de prier le Saint-Canard ! :pray: :compass: :semiscanard: ')
    }
})