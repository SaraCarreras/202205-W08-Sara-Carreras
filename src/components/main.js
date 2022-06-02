import { Component } from './component.js';
import { Pending } from './pending.js';
import { Watched } from './watched.js';

export class Main extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        this.createComponents();
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                        <h2 class="section-title">Series list</h2>
                        <slot class="series-pending"></slot>
                        <slot class="series-watched"></slot>
                </section>    
            </main>
        `;
    }
    createComponents() {
        new Pending('slot.series-pending');
        new Watched('slot.series-watched');
    }
}
