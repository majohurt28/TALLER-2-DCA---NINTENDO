
import * as components from "./components/index.js";
//**Featured */
import featuredData from "./datas/featureData.js";
import featuredContent, { Attribute } from "./components/featured/featured.js";

//**Shop section */
import shopData from "./datas/shopData.js";
import shopcardContent, { Attribute2 } from "./components/shopcard/shopcard.js";

//*News section part 1 */
import newsData from "./datas/newsData.js";
import newscardContent, { Attribute3 } from "./components/news/news.js";   

import news2Data from "./datas/news2Data.js";
import news2Content, { Attribute4 } from "./components/news2/news2.js";

//**Sold section */
import soldData from "./datas/soldData.js";
import soldcardContent, { Attribute5 } from "./components/soldcard/soldcard.js"; 


//**Launch section */
import launchData from "./datas/launchData.js";
import launchcardContent, { Attribute6 } from "./components/launchcard/launchcard.js";




//**Featured */

class appcontainer extends HTMLElement {
    container1: featuredContent[] = [];
    container2: shopcardContent[] = [];
    container3: newscardContent[] = [];
    container4: news2Content[] = [];
    container5: soldcardContent[] = [];
    container6: launchcardContent[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        featuredData.forEach((user) => {
            const featuredCard = this.ownerDocument.createElement(
                "featured-contentcard"
                ) as featuredContent;
                featuredCard.setAttribute(Attribute.image, user.image);
                featuredCard.setAttribute(Attribute.description, (user.description));
                featuredCard.setAttribute(Attribute.gameconsole, user.gameconsole);
                this.container1.push(featuredCard);
        });

        shopData.forEach((user) => {
            const shopcardCard = this.ownerDocument.createElement(
                "shopcard-content"
                ) as shopcardContent;
                shopcardCard.setAttribute(Attribute2.tittle, user.tittle);
                shopcardCard.setAttribute(Attribute2.image, user.image);
                shopcardCard.setAttribute(Attribute2.description, (user.description));
                shopcardCard.setAttribute(Attribute2.button, user.button);
                this.container2.push(shopcardCard);
        });

        newsData.forEach((user) => {
            const newscardContainer = this.ownerDocument.createElement(
                "newscard-content"
                ) as newscardContent;
                newscardContainer.setAttribute(Attribute3.tittle, user.tittle);
                newscardContainer.setAttribute(Attribute3.image, user.image);
                newscardContainer.setAttribute(Attribute3.date, user.date);
                newscardContainer.setAttribute(Attribute3.description, user.description);
                newscardContainer.setAttribute(Attribute3.read, user.option);
                this.container3.push(newscardContainer);
        });

        news2Data.forEach((user) => {
                const news2Card = this.ownerDocument.createElement(
                    "news2card-content"
                 ) as news2Content;
                 news2Card.setAttribute(Attribute4.tittle, user.tittle);
                 news2Card.setAttribute(Attribute4.image, user.image);
                 news2Card.setAttribute(Attribute4.date, user.date);
                 news2Card.setAttribute(Attribute4.option, user.option);
                  this.container4.push(news2Card);
         });

         soldData.forEach((user) => {
             const soldC = this.ownerDocument.createElement(
             "soldcard-content"
             ) as soldcardContent;
            soldC.setAttribute(Attribute5.image, user.image);
            soldC.setAttribute(Attribute5.name, user.name);
            soldC.setAttribute(Attribute5.date, user.date);
            soldC.setAttribute(Attribute5.price, user.price);
            soldC.setAttribute(Attribute5.gameConsole, user.gameConsole);
            this.container5.push(soldC);
            });

            launchData.forEach((user) => {
               const launchcardCard = this.ownerDocument.createElement(
                 "launchcard-content"
                    ) as launchcardContent;
                                        
                 launchcardCard.setAttribute(Attribute6.image, user.image);
                 launchcardCard.setAttribute(Attribute6.tittle, user.name);
                 launchcardCard.setAttribute(Attribute6.announce, (user.announce));
                  launchcardCard.setAttribute(Attribute6.date, user.date);
                 launchcardCard.setAttribute(Attribute6.price, user.price);
                                    launchcardCard.setAttribute(Attribute6.gameConsole, user.gameConsole);
                                   this.container6.push(launchcardCard);
                                });

        
        }

        connectedCallback() {
            this.render();
        }
        
        render() {
                    
            this.shadowRoot!.innerHTML = `
            <link rel="stylesheet" href="./app/components/featured/featured.css">
            <link rel="stylesheet" href="./app/components/shopcard/shopcard.css">
            <link rel="stylesheet" href="./app/components/news/news.css">
            <link rel="stylesheet" href="./app/components/news2/news2.css">
            <link rel="stylesheet" href="./app/components/soldcard/soldcard.css">
            <link rel="stylesheet" href="./app/components/launchcard/launchcard.css">
            `
            //**Featured Cards */
            const featurecards = this.ownerDocument.createElement("section");
            featurecards.className ='featuredCard-container'
            this.container1.forEach((featuredCard)=>{
                featurecards.appendChild(featuredCard);
            })
            this.shadowRoot?.appendChild(featurecards);

            //Shop cards
            const shopcardCards = this.ownerDocument.createElement("section");
            shopcardCards.className ='shopcardsContainer'
            this.container2.forEach((shopcardCard)=>{
                shopcardCards.appendChild(shopcardCard);
            });
            this.shadowRoot?.appendChild(shopcardCards);

            //News Cards
            const newsCards = this.ownerDocument.createElement("section");
            newsCards.className ='news-Container'
            this.container3.forEach((newscardContainer)=>{
                newsCards.appendChild(newscardContainer);
            })
            this.shadowRoot?.appendChild(newsCards);

            //**News2 Cards */
            const news2Cards = this.ownerDocument.createElement("section");
                news2Cards.className ='news2Container'
                 this.container4.forEach((news2Card)=>{
                     news2Cards.appendChild(news2Card);
                 })
             this.shadowRoot?.appendChild(news2Cards);

             const soldCards = this.ownerDocument.createElement("section");
                     soldCards.className ='soldContainer'
                   this.container5.forEach((soldC)=>{
                       soldCards.appendChild(soldC);

                    })
                    this.shadowRoot?.appendChild(soldCards);

                    const launchcardCards = this.ownerDocument.createElement("section");
                     launchcardCards.className ='launchcardcont'
                     this.container6.forEach((launchcardCard)=>{
                     launchcardCards.appendChild(launchcardCard);
                    
                      })
                    this.shadowRoot?.appendChild(launchcardCards);
                                        
            
        }
    }

customElements.define("app-container", appcontainer);


 


//     //**Shop */

//     class Shopdatacontainer extends HTMLElement {
//         container2: shopcardContent[] = [];
        
//         constructor() {
//             super();
//             this.attachShadow({ mode: "open" });
    
//             shopData.forEach((user) => {
//                 const shopcardCard = this.ownerDocument.createElement(
//                     "shopcard-content"
//                     ) as shopcardContent;
//                     shopcardCard.setAttribute(Attribute2.tittle, user.tittle);
//                     shopcardCard.setAttribute(Attribute2.image, user.image);
//                     shopcardCard.setAttribute(Attribute2.description, (user.description));
//                     shopcardCard.setAttribute(Attribute2.button, user.button);
//                     this.container2.push(shopcardCard);
//                 });
//             }
    
//             connectedCallback() {
//                 this.render();
//             }
            
//             render() {
                
//                 this.shadowRoot!.innerHTML = `
//                 <link rel="stylesheet" href="./app/components/shopcard/shopcard.css">
//                 `
//                 const shopcardCards = this.ownerDocument.createElement("section");
//                 shopcardCards.className ='shopcardsContainer'
//                 this.container2.forEach((shopcardCard)=>{
//                     shopcardCards.appendChild(shopcardCard);

//                 });
//                     this.shadowRoot?.appendChild(shopcardCards);
                
//             }
//         }
//         customElements.define("shopcard-container", Shopdatacontainer);

       
//         //**News */
//        /*   class Newscontainer extends HTMLElement {
//         container3: newscardContent[] = [];
        
//         constructor() {
//             super();
//             this.attachShadow({ mode: "open" });
    
//             newsData.forEach((user) => {
//                 const newscardContainer = this.ownerDocument.createElement(
//                     "newscard-content"
//                     ) as newscardContent;
//                     newscardContainer.setAttribute(Attribute3.tittle, user.tittle);
//                     newscardContainer.setAttribute(Attribute3.image, user.image);
//                     newscardContainer.setAttribute(Attribute3.date, user.date);
//                     newscardContainer.setAttribute(Attribute3.description, user.description);
//                     newscardContainer.setAttribute(Attribute3.read, user.option);
//                     this.container3.push(newscardContainer);
//                 });
//             }
    
//             connectedCallback() {
//                 this.render();
//             }
            
//             render() {
                
//                     this.shadowRoot!.innerHTML = `
//                     <link rel="stylesheet" href="./app/components/news/news.css">
//                     `
//                     const newsCards = this.ownerDocument.createElement("section");
//                     newsCards.className ='news-Container'
//                     this.container3.forEach((newscardContainer)=>{
//                         newsCards.appendChild(newscardContainer);

//                     })
//                         this.shadowRoot?.appendChild(newsCards);
                    
//                 }
//             }
        
//             customElements.define("news-container", Newscontainer);  */
          
//  //**News2  */
//  class News2datacontainer extends HTMLElement {
//     container4: news2Content[] = [];
    
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });

//         news2Data.forEach((user) => {
//             const news2Card = this.ownerDocument.createElement(
//                 "news2card-content"
//                 ) as news2Content;
//                 news2Card.setAttribute(Attribute4.tittle, user.tittle);
//                 news2Card.setAttribute(Attribute4.image, user.image);
//                 news2Card.setAttribute(Attribute4.date, user.date);
//                 news2Card.setAttribute(Attribute4.option, user.option);
//                 this.container4.push(news2Card);
//             });
//         }

//         connectedCallback() {
//             this.render();
//         }
        
//         render() {
            
//                 this.shadowRoot!.innerHTML = `
//                 <link rel="stylesheet" href="./app/components/news2/news2.css">
//                 `
//                 const news2Cards = this.ownerDocument.createElement("section");
//                 news2Cards.className ='news2Container'
//                 this.container4.forEach((news2Card)=>{
//                     news2Cards.appendChild(news2Card);

//                 })
//                     this.shadowRoot?.appendChild(news2Cards);
                
//             }
//         }
    
//         customElements.define("news2-container", News2datacontainer ); 

          

//         //**Sold section */
//         class SoldcontainerClass extends HTMLElement {
//             container5: soldcardContent[] = [];

//             constructor() {
//                 super();
//                 this.attachShadow({ mode: "open" });

//                 soldData.forEach((user) => {
//                     const soldC = this.ownerDocument.createElement(
//                         "soldcard-content"
//                         ) as soldcardContent;
//                         soldC.setAttribute(Attribute5.image, user.image);
//                         soldC.setAttribute(Attribute5.name, user.name);
//                         soldC.setAttribute(Attribute5.date, user.date);
//                         soldC.setAttribute(Attribute5.price, user.price);
//                         soldC.setAttribute(Attribute5.gameConsole, user.gameConsole);
//                         this.container5.push(soldC);
//                     });
//                 }

//                 connectedCallback() {
//                     this.render();
//                 }

//                 render() {
                
//                     this.shadowRoot!.innerHTML = `
//                     <link rel="stylesheet" href="./app/components/soldcard/soldcard.css">
//                     `
//                     const soldCards = this.ownerDocument.createElement("section");
//                     soldCards.className ='soldContainer'
//                     this.container5.forEach((soldC)=>{
//                         soldCards.appendChild(soldC);

//                     })
//                     this.shadowRoot?.appendChild(soldCards);
                
//             }
//         }

//         customElements.define("soldcard-container", SoldcontainerClass);
   
        


//         //**Launch */

//         class Launchdatacontainer extends HTMLElement {
//             container6: launchcardContent[] = [];
            
//             constructor() {
//                 super();
//                 this.attachShadow({ mode: "open" });
        
//                 launchData.forEach((user) => {
//                     const launchcardCard = this.ownerDocument.createElement(
//                         "launchcard-content"
//                         ) as launchcardContent;
                        
//                         launchcardCard.setAttribute(Attribute6.image, user.image);
//                         launchcardCard.setAttribute(Attribute6.tittle, user.name);
//                         launchcardCard.setAttribute(Attribute6.announce, (user.announce));
//                         launchcardCard.setAttribute(Attribute6.date, user.date);
//                         launchcardCard.setAttribute(Attribute6.price, user.price);
//                         launchcardCard.setAttribute(Attribute6.gameConsole, user.gameConsole);
//                         this.container6.push(launchcardCard);
//                     });
//                 }
        
//                 connectedCallback() {
//                     this.render();
//                 }
                
//                 render() {
                
//                     this.shadowRoot!.innerHTML = `
//                     <link rel="stylesheet" href="./app/components/launchcard/launchcard.css">
//                     `
//                     const launchcardCards = this.ownerDocument.createElement("section");
//                     launchcardCards.className ='launchcardcont'
//                     this.container6.forEach((launchcardCard)=>{
//                         launchcardCards.appendChild(launchcardCard);

//                     })
//                         this.shadowRoot?.appendChild(launchcardCards);
                    
//                 }
//             }
       
 
        
      

   
    
//     customElements.define("launchcard-container", Launchdatacontainer);
    
                                                                                                                                                                                                                                                                                