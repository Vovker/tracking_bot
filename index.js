import {Telegraf} from "telegraf";

const bot = new Telegraf('5676451142:AAGULkR11B3oSW3cwjyNlPp885ZI4JEfMsI');

//bot will notify members @test, @test2, @test3 each day at 22:00
const data = {
    chat_id: '',
    recepients: [],
}
const notifyTime = '22:00';

bot.command('start', (ctx) => {
    data.chat_id = ctx.chat.id;
    ctx.reply('Hello, please enter recepients');
})

bot.command('add', (ctx) => {
    if(ctx.from.username === 'uladzimirkavalchuk') {
    ctx.message.text.split(' ').forEach((item, index) => index !== 0 && data.recepients.push(item));
    ctx.reply('Added');
    } else {
        ctx.reply('You are not admin');
    }
})
bot.command('notify', (ctx) => {
    if(ctx.from.username === 'uladzimirkavalchuk') {
        ctx.telegram.sendMessage('-882950550', `Абалдуи, чем сегодня занимались? ${data.recepients.join(', ')}`);
    } else {
        ctx.reply('You are not admin');
    }
});

bot.launch();
