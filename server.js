const TelegramBot = require("node-telegram-bot-api");
const token = "6003262706:AAE7QqjmDALycv4flVGohW7CP2-8co9ET0c";
const bot = new TelegramBot(token, { polling: true });
// const con = require("./connection");
bot.on("message", (message) => {
    const chatId = message.chat.id;
    const messageText = message.text.toLowerCase();
    const firstName = message.from.first_name;
    const lastName = message.from.last_name;
    const fullName = `${firstName} ${lastName}`;
    if (messageText.includes("/start") || messageText.includes("keyboard")) {
        const keyboard = [
            [{ text: "Who are you?" }, { text: "How to get started?" }],
            [{ text: "How to make money from BitFx" }, { text: "How do I view trade result" }],
            [{ text: "Which brokers are the best" }, { text: "Payment Methods" }],
            [{ text: "How much can I make per month" }],
            [{ text: "▶️ Forex Signal Plan Details ◀️" }],
            [{ text: "▶️ Crypto Signal Plan Details ◀️" }],
            [{ text: "▶️ Investment Plan Details ◀️" }],
            [{ text: "▶️ System Installation Plan Details ◀️" }],
            [{ text: "Contact with BitFx Admin" }, { text: "Join the Free channel!" }],
            [{ text: "Can I get free signal ?" }], [{ text: "Can I have free trial to test your service?" }],
        ];
        const replyMarkup = {
            keyboard,
            one_time_keyboard: false,
        };
        bot.sendMessage(chatId, `Nice to meet you ${fullName} !, I am BitFxBot`, {
            reply_markup: replyMarkup,
        });
    } else if (messageText.includes('how to make money from bitfx')) {
        bot.sendMessage(chatId, 'We provide Forex signal, Crypto signal service and investment service.\n\nFor those who know about the Forex and Crypto market, by subscribing to Signal services, Subscribers will be granted access to a VIP channel where you will receive profitable trading signals with detailed trade plan and risk management. See our Forex and Crypto signals in Our Services page.\n\nFor those who are newbies in the Forex & Crypto market, we provide investment service for you to earn passive income from 30% APR to 100% APR. See our investment service in Our Services page.', { parse_mode: 'Markdown' });
    } else if (messageText.includes("broker")) {
        bot.sendMessage(chatId, "Some of the most popular and reputable brokers in the industry include Interactive Brokers, TD Ameritrade, Charles Schwab, Fidelity, E*TRADE, and Robinhood");
    } else if (messageText.includes("free trial")) {
        bot.sendMessage(chatId, 'No you can’t, our lowest price is $6.99 for 1 day access Forex signal plan and $13.99 for 1 day access for Crypto signal plan. You will receive 3-5 trading signals.\nHowever, alternatively, by joining our free trading community you will receive our daily market analysis, hot breaking news and market sentiment. Once in a while, we will publish free trading signals (you can use as a trial).');
    } else if (messageText.includes('free signal')) {
        bot.sendMessage(chatId, 'Yes, you can. By introducing a person who subscribes to our signal service or introducing an investor subscribed to our investment plan.\n\nFor each successful referral, you can earn up to 25% commission. Contact us now to learn more about our referral program!', { parse_mode: 'Markdown' });
    } else if (messageText.includes("hi") || messageText.includes("hello")) {
        bot.sendMessage(chatId, `Nice to meet you ${fullName} \n 😍`);
    } else if ((messageText.includes("who") || messageText.includes("what")) && (messageText.includes("r") || messageText.includes("are")) && (messageText.includes("you") || messageText.includes("u"))) {
        bot.sendMessage(chatId, "We are a community of talented, passionate, and independent thinkers who share a commitment for excellence. By fostering a culture of openness, transparency, we strive to unlock the most complex questions in investment strategy. ");
    } else if (messageText.includes("how to get started")) {
        bot.sendMessage(chatId, '📝 Step 1: Read our detailed planning and pricing.\n👥 Step 2: Join our free trading community.\n💰 Step 3: Subscribe to our signal services or investment service.\n💳 Step 4: Make payment.\n📈 Step 5: Follow our signal instruction to trade profitable or sit back & receive passive income accordingly.', { parse_mode: 'Markdown' });
    } else if (messageText.includes('admin')) {
        bot.sendMessage(chatId, `Please contact our <b>Admin</b> at: <a href="t.me/BitFxSignalsTeam"> BitFx Admin </a> for further details `, { parse_mode: 'HTML' })
    } else if (messageText.includes('payment')) {
        bot.sendMessage(chatId, 'We accept Paypal, Skrill, Crypto (ETH, BTC, Solana, USDT, BNB, ADA,…). For detail instruction, please contact us.')
    } else if (messageText.includes('how much can i make per month')) {
        bot.sendMessage(chatId, `It depends on what plan you choose, but at most you can make up to $3000-5000 per month with our services!`)
    } else if (messageText.includes('how do i view trade result')) {
        bot.sendMessage(chatId, `no answer`)
    } else if (messageText.includes('free channel')) {
        bot.sendMessage(chatId, `Sure! you can join our free channel here: `)
    }
    else if (messageText.includes("forex")) {
        bot.sendMessage(chatId, 'These are the Forex Signal plans that we offer, choose one to see detail:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $6.99', callback_data: 'forextrial' }],
                    [{ text: 'Standard Plan - $84 .99', callback_data: 'forexstandard' }],
                    [{ text: 'Premium Plan - $124.99', callback_data: 'forexpremium' }]
                ]
            }
        })
    } else if (messageText.includes("crypto")) {
        bot.sendMessage(chatId, 'These are the Crypto Signal plans that we offer, choose one to see detail:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $13.99', callback_data: 'cryptotrial' }],
                    [{ text: 'Standard Plan - $169', callback_data: 'cryptostandard' }],
                    [{ text: 'Premium Plan - $249', callback_data: 'cryptopremium' }],
                    [{ text: 'The Insider - $1099', callback_data: 'cryptoinsider' }]
                ]
            }
        })
    } else if (messageText.includes("invest")) {
        bot.sendMessage(chatId, 'We also give you an oppoturnity to invest in our service and get high passive income:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Conservative - 30% APR', callback_data: 'conservative' }],
                    [{ text: 'Executive - 180% APR', callback_data: 'executive' }],
                    [{ text: 'Institutional - 1$ Daily', callback_data: 'institutional' }],
                ]
            }
        })
    } else if (messageText.includes("install")) {
        bot.sendMessage(chatId, 'We also assist our dear customer with the Packages and System Installation service:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'EAs Package - $10', callback_data: 'eapackage' }],
                    [{ text: 'System Installation - $250', callback_data: 'systeminstall' }],
                ]
            }
        })
    } else {
        bot.sendMessage(chatId, `Sorry, I wasn't trained for this question, please contact our <b>Admin</b> at: <a href="t.me/BitFxSignalsTeam"> BitFx Admin </a> .If the button happens to be hidden, simple type <b>keyboard</b> into the chat to make it appear again`, { parse_mode: 'HTML' });
    }
});
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    if (query.data === 'forextrial') {
        bot.sendMessage(chatId, '🎉 * THE TRIAL * 🎉\n\n💰 30 % DISCOUNT\n💸 ~~Was $10 / day~~\n💵 * $6.99 *\n🕰️ 1 day access\n💳 * $6.99 * billed one time for one day access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $6.99', callback_data: 'forextrial' }],
                    [{ text: 'Standard Plan - $84 .99', callback_data: 'forexstandard' }],
                    [{ text: 'Premium Plan - $124.99', callback_data: 'forexpremium' }]
                ]
            }
        });
    } else if (query.data === 'forexstandard') {
        bot.sendMessage(chatId, '🎉 * THE STANDARD * 🎉\n\n💰 50 % DISCOUNT\n💸 ~~Was $169~~\n💵 * $84.99 *\n🕰️ 6-month access\n💳 * $84.99 * billed one time for 6 months access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n\n📈 Daily Technical Analysis & Market Updates\n📰 Hot Breaking News & Video\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $6.99', callback_data: 'forextrial' }],
                    [{ text: 'Standard Plan - $84 .99', callback_data: 'forexstandard' }],
                    [{ text: 'Premium Plan - $124.99', callback_data: 'forexpremium' }]
                ]
            }
        });
    } else if (query.data === 'forexpremium') {
        bot.sendMessage(chatId, '🎉 * THE PREMIUM * 🎉\n\n💰 50 % DISCOUNT\n💸 ~~Was $249~~\n💵 * $124.99 *\n🕰️ 12-month access\n💳 * $124.99 * billed one time for 12 months access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n\n📈 Daily Technical Analysis & Market Updates\n📰 Hot Breaking News & Video\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $6.99', callback_data: 'forextrial' }],
                    [{ text: 'Standard Plan - $84 .99', callback_data: 'forexstandard' }],
                    [{ text: 'Premium Plan - $124.99', callback_data: 'forexpremium' }]
                ]
            }
        });
    } else if (query.data === 'cryptotrial') {
        bot.sendMessage(chatId, '🎉 * THE TRIAL * 🎉\n\n💰 30 % DISCOUNT\n💸 ~~Was $20 / day~~\n💵 * $13.99 *\n🕰️ 1 day access\n💳 * $13.99 * billed one time for one day access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $13.99', callback_data: 'cryptotrial' }],
                    [{ text: 'Standard Plan - $169', callback_data: 'cryptostandard' }],
                    [{ text: 'Premium Plan - $249', callback_data: 'cryptopremium' }],
                    [{ text: 'The Insider - $1099', callback_data: 'cryptoinsider' }]
                ]
            }
        });
    } else if (query.data === 'cryptostandard') {
        bot.sendMessage(chatId, '🎉 * THE STANDARD * 🎉\n\n💰 50 % DISCOUNT\n💸 ~~Was $338~~\n💵 * $169 *\n🕰️ 6-month access\n💳 * $169 * billed one time for 6 months access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n🤖 Binance/Bittrex auto trading BOT integrated\n📈 Daily Technical Analysis & Market Updates\n📰 Hot Breaking News & Video\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $13.99', callback_data: 'cryptotrial' }],
                    [{ text: 'Standard Plan - $169', callback_data: 'cryptostandard' }],
                    [{ text: 'Premium Plan - $249', callback_data: 'cryptopremium' }],
                    [{ text: 'The Insider - $1099', callback_data: 'cryptoinsider' }]
                ]
            }
        });
    } else if (query.data === 'cryptopremium') {
        bot.sendMessage(chatId, '🎉 * THE PREMIUM * 🎉\n\n💰 50 % DISCOUNT\n💸 ~~Was $498~~\n💵 * $249 *\n🕰️ 12-month access\n💳 * $249 * billed one time for 12 months access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n🤖 Binance/Bittrex auto trading BOT integrated\n📈 Daily Technical Analysis & Market Updates\n📰 Hot Breaking News & Video\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $13.99', callback_data: 'cryptotrial' }],
                    [{ text: 'Standard Plan - $169', callback_data: 'cryptostandard' }],
                    [{ text: 'Premium Plan - $249', callback_data: 'cryptopremium' }],
                    [{ text: 'The Insider - $1099', callback_data: 'cryptoinsider' }]
                ]
            }
        });
    } else if (query.data === 'cryptoinsider') {
        bot.sendMessage(chatId, '🎉 * THE INSIDER * 🎉\n\n💰 50 % DISCOUNT\n💸 ~~Was $2198~~\n💵 * $1099 *\n🕰️ Life-time access\n💳 * $1099 * billed one time for life-time access\n📈 3 - 5 signals daily\n🎯 Entry / Exit zone; Stop / Profit target\n✅ 80 % ++success rate\n🤖 Binance/Bittrex auto trading BOT integrated\n📈 Daily Technical Analysis & Market Updates\n📰 Hot Breaking News & Video\n🐋 Whale Pump Signal (100% profitable)\n\n🚀 * BFX Platinum Channel * 🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Trial Plan - $13.99', callback_data: 'cryptotrial' }],
                    [{ text: 'Standard Plan - $169', callback_data: 'cryptostandard' }],
                    [{ text: 'Premium Plan - $249', callback_data: 'cryptopremium' }],
                    [{ text: 'The Insider - $1099', callback_data: 'cryptoinsider' }]
                ]
            }
        });
    } else if (query.data === 'conservative') {
        bot.sendMessage(chatId, '🎉 * CONSERVATIVE PLAN * 🎉\n\n💰 30% APR\n⏰ Duration: Unlimited\n💵 Min: $500 / Max: $10000\n💸 Earning Payout: Weekly (by Monday)\n💳 Withdrawal: Anytime\n📈 Management Fee: Waived (0%)\n📞 Support: 24/7 Live Chat\n\nInvest in our CONSERVATIVE PLAN now and earn a stable income with ease! 💰💸🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Conservative - 30% APR', callback_data: 'conservative' }],
                    [{ text: 'Executive - 180% APR', callback_data: 'executive' }],
                    [{ text: 'Institutional - 1$ Daily', callback_data: 'institutional' }],
                ]
            }
        });
    } else if (query.data === 'executive') {
        bot.sendMessage(chatId, '🎉 * EXECUTIVE PLAN * 🎉\n\n💰 180% APR\n💼 BitFx helps you trade, manage your funds, and give you amazing returns.\n📈 Monthly Return: 12.5% ROI\n📈 Quarterly Return: 40% ROI\n📈 Annual Return: 180% ROI\n💵 Fund Invested: $500-$10000\n💸 Earning Payout: Weekly (by Monday)\n💳 Withdrawal: Anytime\n📈 Management Fee: 10% (on profit made)\n📞 Support: 24/7 Live Chat\n\nInvest in our EXECUTIVE PLAN now and enjoy amazing returns on your investment with BitFx! 💰💸🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Conservative - 30% APR', callback_data: 'conservative' }],
                    [{ text: 'Executive - 180% APR', callback_data: 'executive' }],
                    [{ text: 'Institutional - 1$ Daily', callback_data: 'institutional' }],
                ]
            }
        });
    } else if (query.data === 'institutional') {
        bot.sendMessage(chatId, '🎉 * INSTITUTIONAL PLAN * 🎉\n\n💰 1% Daily Return\n💵 Minimum Investment: $10000+\n🚀 We outperform all other investment firms\n📈 Up to 30% consistent monthly capital gain\n🔒 Guaranteed fund safety and security with your choice of brokers\n📩 For more details, please contact us.\n📞 Support: 24/7 Live Chat\n\nInvest in our INSTITUTIONAL PLAN now and enjoy amazing returns on your investment with us! 💰💸🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'Conservative - 30% APR', callback_data: 'conservative' }],
                    [{ text: 'Executive - 180% APR', callback_data: 'executive' }],
                    [{ text: 'Institutional - 1$ Daily', callback_data: 'institutional' }],
                ]
            }
        });
    } else if (query.data === 'eapackage') {
        bot.sendMessage(chatId, '🎉 * EAs PACKAGE * 🎉\n\n💰 Price: $100\n📦 Receive a package bundle of 10 profitable expert advisors(EAs), breakout, pull-back, impulse, snipper strategies...\n📈 Potential Return: 5-20% per month\n✅ 80%+ winning rate\n🚀 BFX Platinum Channel\n📩 Support: Live chat\n\nInvest in our EAs PACKAGE now and receive a bundle of 10 profitable expert advisors(EAs) with high potential returns and a high winning rate! 💰💸🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'EAs Package - $10', callback_data: 'eapackage' }],
                    [{ text: 'System Installation - $250', callback_data: 'systeminstall' }],
                ]
            }
        });
    } else if (query.data === 'systeminstall') {
        bot.sendMessage(chatId, '🎉 *SYSTEM INSTALLATION* 🎉\n\n💰 Price: $250\n📦 Receive a combination of 10 profitable EAs and system installation. (after we complete the installation, the system will run automatically without your touch.\n📈 Potential return: 10-30% per month consistently; Alternatively, we can design the profit outcome upon your request.\n✅ 80%+ winning rate\n🚀 BFX Platinum Channel\n📩 Support: Live chat\n\nInvest in our SYSTEM INSTALLATION now and receive a combination of 10 profitable EAs with high potential returns and a high winning rate! 💰💸🚀', {
            parse_mode: 'Markdown', reply_markup: {
                inline_keyboard: [
                    [{ text: 'EAs Package - $10', callback_data: 'eapackage' }],
                    [{ text: 'System Installation - $250', callback_data: 'systeminstall' }],
                ]
            }
        });
    }
});
