const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is missing!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  if (text === "/start") {
    bot.sendMessage(
      chatId,
      "سلام 👋\nمن ربات هوش مصنوعی تو هستم 🤖\nپیامت رو بفرست."
    );
    return;
  }

  bot.sendMessage(chatId, `پیامت رو دریافت کردم:\n\n${text}`);
});

console.log("Telegram bot is running...");
