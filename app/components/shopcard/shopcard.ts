export enum Attribute2{
    "tittle"= "tittle",
    "image"= "image",
    "description"= "description",
    "button" = "button",
}

class shopcard extends HTMLElement{
    tittle?: string
    image?: string
    description?: string
    button?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute2,null> ={
            tittle : null,
            image : null,
            description :null,
            button : null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute2,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/shopcard/shopcard.css">
            <section>
            <div class="shop-cards">
            <h1><strong>${this.tittle}</strong></h1>
            <br>
            <img class="imag" src="${this.image}">
            <br>
            <br>
            <h2>${this.description}</h2><button class="button-shop">${this.button}</button>
            </div>
            </section>
            `
        }
    }

}

customElements.define("shopcard-content", shopcard)
export default shopcard;

