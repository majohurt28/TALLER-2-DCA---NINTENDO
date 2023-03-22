export enum Attribute5{
    "image"= "image",
    "name"= "name",
    "date"= "date",
    "price"= "price",
    "gameConsole" = "gameConsole",
}

class soldcards extends HTMLElement{
    image?: string
    name?: string
    date?: string
    price?: string
    gameConsole?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute5,null> ={
            image : null,
            name :null,
            date : null,
            price : null,
            gameConsole : null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute5,oldValue: undefined,newValue: string){
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
            `
        }
    }

}

customElements.define("soldcard-content", soldcards)
export default soldcards;