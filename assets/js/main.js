var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
// var deck = [{Value: 'A', Suit: 'spades'}, {Value: 'A', Suit: 'diamonds'}, {Value: 'A', Suit: 'clubs'}{Value: 'A', Suit: 'hearts'} //Das ganze Karten Deck deklariert
//             {Value: 'K', Suit: 'spades'}, {Value: 'K', Suit: 'diamonds'}, {Value: 'K', Suit: 'clubs'}{Value: 'K', Suit: 'hearts'}
//             {Value: 'Q', Suit: 'spades'}, {Value: 'Q', Suit: 'diamonds'}, {Value: 'Q', Suit: 'clubs'}{Value: 'Q', Suit: 'hearts'}
//             {Value: '10', Suit: 'spades'}, {Value: '10', Suit: 'diamonds'}, {Value: '10', Suit: 'clubs'}{Value: '10', Suit: 'hearts'}
//             {Value: '9', Suit: 'spades'}, {Value: '9', Suit: 'diamonds'}, {Value: '9', Suit: 'clubs'}{Value: '9', Suit: 'hearts'}
//             {Value: '8', Suit: 'spades'}, {Value: '8', Suit: 'diamonds'}, {Value: '8', Suit: 'clubs'}{Value: '8', Suit: 'hearts'}
//             {Value: '7', Suit: 'spades'}, {Value: '7', Suit: 'diamonds'}, {Value: '7', Suit: 'clubs'}{Value: '7', Suit: 'hearts'}
//             {Value: '6', Suit: 'spades'}, {Value: '6', Suit: 'diamonds'}, {Value: '6', Suit: 'clubs'}{Value: '6', Suit: 'hearts'}
//             {Value: '5', Suit: 'spades'}, {Value: '5', Suit: 'diamonds'}, {Value: '5', Suit: 'clubs'}{Value: '5', Suit: 'hearts'}
//             {Value: '4', Suit: 'spades'}, {Value: '4', Suit: 'diamonds'}, {Value: '4', Suit: 'clubs'}{Value: '4', Suit: 'hearts'}
//             {Value: '3', Suit: 'spades'}, {Value: '3', Suit: 'diamonds'}, {Value: '3', Suit: 'clubs'}{Value: '3', Suit: 'hearts'}
//             {Value: '2', Suit: 'spades'}, {Value: '2', Suit: 'diamonds'}, {Value: '2', Suit: 'clubs'}{Value: '2', Suit: 'hearts'}]
var deck = new Array();
function getDeck() //Hier werden die 2 arrays zusammen geführt
{
	

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			console.log("assets/img/cards/"+values[x]+"_"+suits[i]+"_white.png");
	// 		for (var i = 0; ;)//vielleicht wird das noch
    // {
    //     document.getElementById("grid-item"+i+"_card").src="../img/cards/"+values[x]+"_"+suits[i]+"_white.png";//Hier junge
    // 	console.log("assets/img/cards/"+values[x]+"_"+suits[i]+"_white.png")	}	
			deck.push(card);
			console.log(deck);
		
		}
	}

	return deck;
}
getDeck();


function shuffle(deck){
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
shuffle(deck);//hier wird gemischt

    for (var i = 1; i < 11; i++)//draw funktioniert!
    {
        document.getElementById("grid-item"+i+"_card").src="assets/img/cards/"+deck[i].Value+"_"+deck[i].Suit+"_white.png";//Hier junge
    }

function renderDeck(deck)
{
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

