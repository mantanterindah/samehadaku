const request = require('request');
const cheerio = require('cheerio');
const Discord = require('discord.js');
const bot = new Discord.Client();
const url = "https://www.samehadaku.net/"

bot.on('ready', (message) => {
	setInterval(() => {
		equest(url, function(err, resp, body) {
			if (err) {
				console.log(err)
			}

			let $ = cheerio.load(body);

			var msg = $('div.mag-box-container > ul > li:nth-child(1) a').attr('href');
			console.log(msg);
			if (msg!=msg) {
				const id ="405199602497617920"
				const channel = bot.channels.get(id);
				channel.send(msg)
			}



			})
	}, 30000)
});

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
