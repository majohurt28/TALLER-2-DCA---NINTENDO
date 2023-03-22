export enum Attribute6{
    "image"= "image",
    "tittle"= "tittle",
    "date" = "date",
    
    "announce" = "announce",
    "price" = "price",
    "gameConsole" = "gameConsole",
    
}

class launchcard extends HTMLElement{
    tittle?: string
    date?: string
    announce?: string
    image?: string
    price?: string
    gameConsole?: string
    
    
    static get observedAttributes(){
        const attrs : Record<Attribute6,null> ={
            tittle : null,
            date : null,
            announce : null,
            image : null,
            price :null,
            gameConsole :null,
             
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute6,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/launchcard/launchcard.css">
            <section>
            <div class="launchcont">
            <img class="imag" src="${this.image}">
            <br>
            <h1><strong>${this.tittle}</strong></h1>
            <h1><strong>${this.date}</strong></h1>
        
            <button>${this.announce}</button>
            <h2>$${this.price}</h2>
            <h2>${this.gameConsole}</h2>
            </div>
            </section>
            `
        }
    }

}

customElements.define("launchcard-content", launchcard)
export default launchcard;

