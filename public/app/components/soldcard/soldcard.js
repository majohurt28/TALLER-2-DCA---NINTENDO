export var Attribute5;
(function (Attribute5) {
    Attribute5["image"] = "image";
    Attribute5["name"] = "name";
    Attribute5["date"] = "date";
    Attribute5["price"] = "price";
    Attribute5["gameConsole"] = "gameConsole";
})(Attribute5 || (Attribute5 = {}));
class soldcards extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            date: null,
            price: null,
            gameConsole: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/soldcard/soldcard.css">
            <div class="soldContainercard">
            <section>
            <img class="imag" src="${this.image}">
            <div class="content5">
            <p1><strong>${this.name}</strong></p1>
            <h2>${this.date}</h2>
            <p1><strong>$${this.price}</strong></p1><br>
            <h2>${this.gameConsole}</h2>
            </div>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("soldcard-content", soldcards);
export default soldcards;
