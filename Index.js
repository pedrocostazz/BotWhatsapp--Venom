const venom = require('venom-bot');

venom.create({
  session: 'bot-session',
  headless: true, // Isso impede que o navegador tente abrir
  useChrome: false, // Não força o uso do Chrome
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'], // Garante que rode em ambiente restrito
}).then((client) => start(client)).catch((err) => console.log(err));

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Como posso te ajudar?');
    }
  });
}
