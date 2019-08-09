const Telegraf = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')
const axios = require('axios');
require('dotenv').config();

let GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("hx9IYRwYQqNuPDaw1mNx8xh7M58z22Qs")

const menu = new TelegrafInlineMenu(ctx => `
✋ Привет, *${ctx.message.from.first_name}*!

💰 Добро пожаловать, я буду держать тебя в курсе курсов валют!

👇 Выбери валюту!
`)
menu.setCommand('start')

menu.simpleButton('USD', 'a', {
  doFunc: ctx => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(resp => ctx.reply(`
-------------------------------------
Курс $ - ${resp.data.Valute.USD.Value}
Дата - ${resp.data.Date}
-------------------------------------
    `))
    .then(console.log(ctx.chat))
  }
})

menu.simpleButton('EURO', 'b', {
  doFunc: ctx => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(resp => ctx.reply(`
-------------------------------------
Курс € - ${resp.data.Valute.EUR.Value}
Дата - ${resp.data.Date}
-------------------------------------
    `))
  }
})

menu.simpleButton('BONUS', 'c', {
  doFunc: ctx => {
    client.random('gifs', {})
    .then((resp) => {
      ctx.reply(resp.data.url)
    })
    //console.log(ctx.deleteMessage(ctx.chat.id, messageId));
  }
})

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(menu.init())

//bot.startPolling()

// bot.start((ctx) => ctx.replyWithMarkdown(`
// ✋ Привет, *${ctx.message.from.first_name}*!

// 💰 Добро пожаловать, я буду держать тебя в курсе курсов валют!

// 👇 Выбери валюту!
// /USD /EURO
// `))

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears(/.+/, (ctx) => {
//   console.log(ctx)
//   ctx.reply('Hey there')
// })
// bot.command('usd', (ctx) => ctx.reply('Hello'))
// bot.command('euro', ({ reply }) => reply('Yo'))
// bot.command('hipster', Telegraf.reply('λ'))

bot.launch()