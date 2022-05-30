import { Component } from './component.js';
export class Header extends Component {
    template = '';
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.selector = selector;
        this.outerRender(this.selector);
    }
    createTemplate() {
        return `        
        <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header>`;
    }
}
