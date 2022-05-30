import { Header } from './components/header.js';
import { Pending } from './components/pending.js';
import { Watched } from './components/watched.js';

function app() {
    new Header('slot.header');
    new Pending('slot.pending');
    new Watched('slot.watched');
    console.log('APPFunciona');
}

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        app();
        console.log('listener funciona');
    });
})();
