import { getSocket } from './socket';

let waitAfterStart = false;

function isBotStarted() {
  const socket = getSocket('/', true);
  return new Promise(resolve => {
    const check = () => {
      socket.emit('botStatus', (status: boolean) => {
        const el = document.getElementById('bot-starting-intro');
        if (status) {
          if (el) {
            el.innerHTML = '... registering sockets ...';
          }
          console.log('Bot is started, continue');
          setTimeout(() => resolve(true), waitAfterStart ? 5000 : 0);
        } else {
          if (el) {
            el.style.display = 'block';
            el.innerHTML = '... bot is starting ...';
          }
          console.log('Bot not started yet, waiting');
          waitAfterStart = true;
          setTimeout(() => check(), 1000);
        }
      });
    };
    check();
  });
}

export { isBotStarted };