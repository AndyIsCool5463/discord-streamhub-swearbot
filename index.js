require("dotenv").config();

const discord = require("discord.js");
const bot = new discord.Client();
const bw = require("badwords/array");

bot.on("ready", () => {
  console.log("bot is ready.");
});

bot.on("message", message => {
  if (message.channel.id == "645434293639970818") {
    if (bw.includes(message.content)) {
      message.delete();
      message.reply("you swore dummy 😠").then(m => {
        setTimeout(() => m.delete(), 2000);
      });
    }
  }
});
bot.login(process.env.DTOKEN);
