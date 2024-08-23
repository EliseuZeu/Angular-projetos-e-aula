class CardNews extends HTMLElement{

    //Contrutor metodo que sera executado primeiro
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // build metedo contruir  o componente

    build() {
        const componentRoot = document.createElement("div"); // HTML - <div></div>
        componentRoot.setAttribute("class", "card"); // HTML - <div class="card"></div>


        //conteudo dentro da card left
        const cardLeft = document.createElement("div");  // HTML - <div></div>
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonimos");

        const linkDev = document.createElement("a");
        linkDev.href = this.getAttribute("link-url");
        linkDev.textContent = this.getAttribute("title");
        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("paragrafo");

        //conteudo dentro da card right
        const cardRight = document.createElement("div"); // HTML - <div></div>
        cardRight.setAttribute("class", "card-right");
        const img = document.createElement("img");
        img.src = this.getAttribute("img");
        img.alt = "Imagem da noticia";



        //links para afiliação
        cardRight.appendChild(img);
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkDev);
        cardLeft.appendChild(paragrafo);
        componentRoot.appendChild(cardLeft); // HTML - <div> <div>Div filha</div> </div> 
        componentRoot.appendChild(cardRight); // HTML - <div> <div>Div filha</div> </div> 
        return componentRoot; // retorno o componentRoot
    }

    //metodo de stylos do componentes
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
          width: 80%;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
          img {
            width: 400px;
            heigth: 200px;

          }
        
        .card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card-left > span {
          font-weight: 400;
        }
        
        .card-left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card-left > p {
          color: rgb(70, 70, 70);
        }
        `

        return style;
    }
}

customElements.define("card-news", CardNews);
