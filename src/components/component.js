export class Component {
    template;
    render(selector) {
        if (selector && document.querySelector(selector)) {
            document.querySelector(selector).innerHTML = this.template;
        }
    }

    outerRender(selector) {
        if (selector && document.querySelector(selector)) {
            document.querySelector(selector).outerHTML = this.template;
        }
    }

    addRender(selector) {
        if (selector && document.querySelector(selector)) {
            document.querySelector(selector).innerHTML += this.template;
        }
    }
}
