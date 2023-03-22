export var Attribute3;
(function (Attribute3) {
    Attribute3["date"] = "date";
    Attribute3["image"] = "image";
    Attribute3["tittle"] = "tittle";
    Attribute3["description"] = "description";
    Attribute3["read"] = "read";
})(Attribute3 || (Attribute3 = {}));
class newscard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            image: null,
            tittle: null,
            description: null,
            read: null,
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
            <link rel="stylesheet" href="./app/components/news/news.css">
            <section>
            <div class="newscontent">
            <img class="imag" src="${this.image}">
            <div class="content5">
            <h3>${this.date}</h3>
            <h1><strong>${this.tittle}</strong></h1>
        
            <h2>${this.description}</h2>
            <h4 class="read">${this.read}</h4>
            </div>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("newscard-content", newscard);
export default newscard;
