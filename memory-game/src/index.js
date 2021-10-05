document.addEventListener("DOMContentLoaded", () => {
    const resultDixplay = document.querySelector("#result");

    // set 1 is getting all the cards for our memerore game in an aaray
    const card = [
        {
            name: "fries",
            img: "imges/fries.jpg"
        },
        {
            name: "burger",
            img: "imges/burger.jpg"
        },
        {
            name: "pizza",
            img: "imges/pizza.jpg"
        },
        {
            name: "iceCream",
            img: "imges/icecream.png"
        },
        {
            name: "milkShake",
            img: "imges/milkshake.jpg"
        },
        {
            name: "hotdog",
            img: "imges/hotdog.jpg"
        },
        {
            name: "fries",
            img: "imges/fries.jpg"
        },
        {
            name: "burger",
            img: "imges/burger.jpg"
        },
        {
            name: "pizza",
            img: "imges/pizza.jpg"
        },
        {
            name: "iceCream",
            img: "imges/icecream.png"
        },
        {
            name: "milkShake",
            img: "imges/milkshake.jpg"
        },
        {
            name: "hotdog",
            img: "imges/hotdog.jpg"
        }
    ];

    // step 2 is getting the cards at random
    card.sort(() => 0.5 - Math.random());

        // step 3 is putting the cards in or grid for display
    const grid = document.querySelector(".grid");
    let cardCosen = [];
    let cardChosenId = [];
    let cardswon = [];

    function createBord() {
        for (let i = 0; i < card.length; i++) {
            const cards = document.createElement("img");
            cards.setAttribute("src", "imges/buddybuddy.jpg");
            cards.setAttribute("data-id", i);
            grid.appendChild(cards);
            cards.addEventListener("click", flipCard);
        }
    }
   
    // step 4 fliping cards after they been clicked
    function flipCard() {
       let cardID = this.getAttribute("data-id");
        cardCosen.push(card[cardID].name);
        cardChosenId.push(cardID);
        this.setAttribute("src", card[cardID].img);
        
        if (cardCosen.length === 2) {
          
            setTimeout(CheckForMatch, 300);
        }
    }
    /* step 5 is to check to see if the cards match each other or if the same two have been clicked on
     were also fliping them back over if they dnt match each other 
    */
    function CheckForMatch() {
        
        const c = document.querySelectorAll("img");
        const option1 = cardChosenId[0];
        const option2 = cardChosenId[1];
       
        if (option1 == option2) {
            alert("you have chosen the same card ");
            c[option1].setAttribute("src", "imges/buddybuddy.jpg");
            c[option2].setAttribute("src", "imges/buddybuddy.jpg");
        } else if (cardCosen[0] === cardCosen[1]) {
            alert("you found a match");
            c[option1].setAttribute("src", "imges/white.jpg");
            c[option2].setAttribute("src", "imges/white.jpg");
            c[option1].removeEventListener("click", flipCard);
            c[option2].removeEventListener("click", flipCard);
            cardswon.push(cardCosen);
        }
        else {
            c[option1].setAttribute("src", "imges/buddybuddy.jpg");
            c[option2].setAttribute("src", "imges/buddybuddy.jpg");
            alert("not a match");
        }
        cardChosenId = [];
        cardCosen = [];
        // last step is keeping and displaying the score
        resultDixplay.textContent = cardswon.length;
        if (cardswon.length === 6) {
            resultDixplay.textContent = " you won";
        }

    }
    createBord();
    console.log();

});