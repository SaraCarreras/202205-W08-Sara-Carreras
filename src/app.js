import { Header } from './components/header.js';
import { Main } from './components/main.js';

/*function app() {
    new Header('slot.header');
    new Main('slot.main-sec');

    console.log('APPFunciona');
}
*/
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('slot.header');
        new Main('slot.main');
        console.log('listener funciona');
    });
})();
