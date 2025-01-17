import { parser } from '../decorators';
import Overlay from './_interface';

const re = new RegExp('\\p{L}*', 'gmu');
class WordCloud extends Overlay {
  @parser({ fireAndForget: true })
  sendWords(opts: ParserOptions) {
    this.socket?.emit('wordcloud:word', opts.message.match(re)?.filter(o => o.length > 0).map(o => o.toLowerCase()));
  }
}

const wordCloud = new WordCloud();
export default wordCloud;
