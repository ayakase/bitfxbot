const TelegramBot = require("node-telegram-bot-api");
const token = "6003262706:AAE7QqjmDALycv4flVGohW7CP2-8co9ET0c";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", (message) => {
    const chatId = message.chat.id;
    const messageText = message.text;
    const firstName = message.from.first_name;
    const lastName = message.from.last_name;
    const fullName = `${firstName} ${lastName}`;
    if (messageText.includes("/start") || messageText.includes("reset")) {
        const keyboard = [
            [{ text: "Who are you?" }, { text: "How to get started?" }],
            [{ text: "How to make money from BitFx" }, { text: "How do I view trade result" }],
            [{text: "Which brokers are the best"},{text:"How much can I make per month" }],
            [{text: "Can I get free signal ?"}], [{text: "Can I have free trial to test your service?"}],
            [{text: " ▶️ Forex Signal Plan Details ◀️"}]
        ];
        const replyMarkup = {
            keyboard,
            one_time_keyboard: true,
        };
        bot.sendMessage(chatId, `Nice to meet you ${fullName} !, I am BitFxBot`, {
            reply_markup: replyMarkup,
        });
    }


    else if (messageText.includes("hi") || messageText.includes("hello")) {
        bot.sendMessage(chatId, `Nice to meet you ${fullName} \n 😍`);
    }
    else if ((messageText.includes("Who") || messageText.includes("who") || messageText.includes("What") || messageText.includes("what")) && (messageText.includes("r") || messageText.includes("are")) && (messageText.includes("you") || messageText.includes("u"))) {
        bot.sendMessage(chatId, "We are a community of talented, passionate, and independent thinkers who share a commitment for excellence. By fostering a culture of openness, transparency, we strive to unlock the most complex questions in investment strategy. ");
    }
    else if (messageText.includes("How to get started ?")) {
        bot.sendMessage(chatId, "Step 1: Read our detailed planning and pricing. \n Step 2: Join our free trading community. \n Step3: Subscribe to our signal services or investment service. \n Step 4: Make payment. \n Step 5: Follow our signal instruction to trade profitable or sit back & receive passive income accordingly.");
    } else {
        bot.sendMessage(chatId, "Sorry, I wasn't trained for this question, please contact our Admin at:");
    }
});