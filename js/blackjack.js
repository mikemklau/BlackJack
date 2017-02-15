//Blackjack non player orientated functions

var /*208cards*/fullDeck = ["1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S"],

    dealerHand = $("div#dealerHand"),
    playerHand = $("div#playerHand"),
    splitHand = $("span#splitHand"),
    playerTotal = $('div#playerTotal'),
    dealerTotal = $('div#dealerTotal'),
    betArea = $('span#bet'),
    bankArea = $('span#bank'), 
    dealButton = $("div#start.button"),
    hitButton = $("div#hit.button"),
    standButton = $("div#stand.button"),
    splitButton = $("div#split.button"),
    doubleButton = $("div#double.button"),
    rebetButton = $("div#rebet.button"),
    clearButton = $("button#clearBet"),
    newGameButton = $("div#reset.button"),
    splitCounter = 0,
    splitTotal = 0;


// *****************DEALER FUNCTIONS*******************

var shuffle = function()//when deck gets to <52 dealer adds cards to make full deck
  {
    if(fullDeck.length < 52)
      {
        fullDeck = ["1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S",
               
              "1D", "2D", "3D", "4D", "5D", "6D","7D", "8D", "9D", "10D", "11D", "12D", "13D",
              "1C", "2C", "3C", "4C", "5C", "6C","7C", "8C", "9C", "10C", "11C", "12C", "13C",
              "1H", "2H", "3H", "4H", "5H", "6H","7H", "8H", "9H", "10H", "11H", "12H", "13H",
              "1S", "2S", "3S", "4S", "5S", "6S","7S", "8S", "9S", "10S", "11S", "12S", "13S"];

    shuffle_sound.play();
      };
  };

var dealCard = function(playerType)
  {

    if(fullDeck.length === 0)
      {
      window.alert("no more cards left in deck...");//THIS SHOULD NEVER HAPPEN CHECK FOR ERROR IF SO
      }

    else
      {
      //function to draw a card at random
      random = Math.floor((Math.random()*fullDeck.length));
      //above brings random 1 in 52, below grabs card
      var card = fullDeck[random],
          displayCard = "<div class='playingCard'><img src='css/png/"+card+".png'></div>";
      //remove card from deck
      fullDeck.splice(random, 1);
      playerType.hand.push(card);
      playerType.calculateTotalScore();
      playerType.updateScore();
      playerType.handDisplay.append(displayCard);
      deal.play();
      }
  };

var dealFacedown = function(playerType) 
  {
    if(fullDeck.length === 0)
      {
      window.alert("no more cards left in deck...");
      }

    else
      {
      random = Math.floor((Math.random()*fullDeck.length));
      var displayCard = "<div id='cardback' class='playingCard'><img src='css/png/"+"cardback"+".png'></div>";
      playerType.handDisplay.append(displayCard);
      }
  };
//TEST DEAL FUNCTIONS FOR INTERVIEW AND SCENARIO TESTING (splits doubles etc)

  var dealCard1 = function(playerType)
  {

    if(fullDeck.length === 0)
      {
      window.alert("no more cards left in deck...");
      }

    else
      {
      random = Math.floor((Math.random()*fullDeck.length));
      var card = "5C",
          displayCard = "<div class='playingCard'><img src='css/png/"+card+".png'></div>";
      fullDeck.splice(random, 1);
      playerType.hand.push(card);
      playerType.calculateTotalScore();
      playerType.updateScore();
      playerType.handDisplay.append(displayCard);

      }
  };

  var dealCard2 = function(playerType)
  {
    if(fullDeck.length === 0)
      {
      window.alert("no more cards left in deck...");
      }

    else
      {
      random = Math.floor((Math.random()*fullDeck.length));
      var card = "6H",
          displayCard = "<div class='playingCard'><img src='css/png/"+card+".png'></div>";
      fullDeck.splice(random, 1);
      playerType.hand.push(card);
      playerType.calculateTotalScore();
      playerType.updateScore();
      playerType.handDisplay.append(displayCard);
      }
  };

  var dealCard3 = function(playerType)
  {
    if(fullDeck.length === 0)
      {
      window.alert("no more cards left in deck...");
      }

    else
      {
      random = Math.floor((Math.random()*fullDeck.length));
      var card = "10S",
          displayCard = "<div class='playingCard'><img src='css/png/"+card+".png'></div>";
      fullDeck.splice(random, 1);
      playerType.hand.push(card);
      playerType.calculateTotalScore();
      playerType.updateScore();
      playerType.handDisplay.append(displayCard);
      }
  };

//**//

  var dealSplit = function(playerType, hand) // FUNCTION FOR SPLITS everytime a card is displayed the score should always calculate hence why put in 1 function
  {
    playerType.hand.push();
    playerType.handDisplay.html();
    playerType.calculateTotalScore();
    playerType.updateScore();
  };

var processHand = function(playerType) //adds up non ace cards
{
  var score = 0;

    for(n=0; n<playerType.hand.length; n++)
      {
        var card = parseInt(playerType.hand[n]);
             
            if(card>=10)
              {
                score += 10;        
              }
            else if(card === 1)//ace dependent functions start HERE!!
              {
                score += 0;
              }
            else
              {
                score += card; 
              }
      }
    return score;
};

var findAces = function(playerType) //finds all aces in the hand and puts into an array
{
  var acedHand = [];

  for(n=0; n<playerType.hand.length; n++)
    {
      var card = parseInt(playerType.hand[n]);
             
        if(card===1)
          {
            acedHand.push(card);        
          }
    }

return acedHand;

};

var processAces = function(playerType)
{
  var score = 0,
  arrayOfAces = findAces(playerType);

  if(arrayOfAces[0] === undefined)//no aces means score to add will be 0
  {
    return 0;
  }
  
  else if(processHand(playerType)>10)// if the remaining cards are more than 10 then it will bust hence only add 1 to score
  {
    for(n=0;n<arrayOfAces.length;n++)
  {
      score +=1;
  }
    return score;
  }
  else//everything else, but mostly if remaining cards are below 10 then remaining choices are 11/1, but only the first ace will be 11 as 2 or more aces as 11 will bust
    {
    for(n=0;n<arrayOfAces.length;n++)
    {
      if(n===0)
      {
        score +=11;
      }
      else
      {
        score+=1;
      }
     }
    return score;
  }
};

var calculateTotalScore = function(playerType) //calculates and returns total score
{
  var handTotal = processHand(playerType),
      aceTotal = processAces(playerType);

    return(handTotal + aceTotal);
};

var updateScore = function(playerType) //displays total score in DOM + updates playerType objects
{
  var totalScore = calculateTotalScore(playerType),
      aceTotal = processAces(playerType);

  if(aceTotal >= 11 && totalScore < 21) //if the aces alone are >= 11 meaning having at least 1 ace in hand AND  the total score is under 21, must display in the format 11/1
    {
      playerType.scoreDisplay.html(totalScore + "/" + (totalScore-10));
      playerType.score = totalScore;
    }

  else if(aceTotal > 11 && totalScore > 21) //if there are multiple aces in hand but the players total score busts then only lower ace hand is displayed
    {
      playerType.scoreDisplay.html(totalScore-10);
      playerType.score = (totalScore - 10);
    }

  else
  {
    playerType.scoreDisplay.html(totalScore);
    playerType.score = totalScore;
  }

};

var checkForBlackjack = function(playerType)
{

  if(playerType.score === 21 && playerType.hand.length === 2)
  {
    playerType.blackjack = true;

    if(parseInt(dealer.hand[0])===10 || parseInt(dealer.hand[0])===1) 
    {
      setTimeout(function(){playerType.stand();}, 700);
    }

    else
    {
      setTimeout(function(){playerType.stand();}, 200);
    }
    playerType.scoreDisplay.addClass('grow');
  }

  else
  {
    playerType.playing = true;
  }
};

var checkForSplit = function(playerType)
{

  if(playerType.hand.length === 2)
  {
    if(parseInt(playerType.hand[0]) === parseInt(playerType.hand[1])) 
    {
      $('div#splitArea').addClass('available');
      $('div#split').addClass('bounce');
      playerType.splitAvailable = true;
    }

    else
    {
      playerType.splitAvailable = false;
    }
  }
};

var checkForDouble = function(playerType)
{
  if(playerType.hand.length === 2 && playerType.blackjack === false)
  {
    var scoreCheck = parseInt(playerType.hand[0]) + parseInt(playerType.hand[1]);

    if(scoreCheck === 11 || scoreCheck === 10)
    {
      dbl.play();
      playerType.doubleAvailable = true;
    }
  }
};

// *****************PLAYER FUNCTIONS*******************
var double = function(playerType) 
{
  pot.double();
  playerType.doubled = true;
};
//PROCESS WINS & BET MANAGEMENT

var processWin = function(){
  if(player.playing === false && dealer.playing === false)
  {
    if(player.score > 21)
    {
      lose();
    }

    else if(player.blackjack === true && dealer.blackjack === false)
    {
      pot.win(2.5);
      BJwin();
    }

    else if(player.blackjack === true && dealer.blackjack === true)
    {
      pot.win(1);
      push();
    }
    
    else if(player.score === 21 && dealer.blackjack === true)
    {
      lose();
    }

    else if(player.score > dealer.score && player.score <= 21)
    {
      if(player.doubled === true)
      {
        pot.win(4);
        win();
      }
      else
      {
        pot.win(2);
        win();
      }
    }
    
    else if(dealer.score > 21 && player.score <= 21)
    {
      if(player.doubled === true)
      {
        pot.win(4);
        win();
      }
      else
      {
        pot.win(2);
        win();
      }
    }
    
    else if(player.score === dealer.score)
    {
      pot.win(1);
      push();
    }
    
    else
    {
      lose();
    }
  }
};

var processSplitWin = function(){
  for(;splitTotal > 0; splitTotal--)
  {
    if(window["split"+splitTotal].score > 21)
    {
      DW.play();
    }

    else if(window["split"+splitTotal].blackjack === true && dealer.blackjack === false)
    {
      pot.win(2.5);
      PW.play();
    }

    else if(window["split"+splitTotal].blackjack === true && dealer.blackjack === true)
    {
      pot.win(1); //1 is just get money back, win is get 2 money back
      PP.play();
    }
    
    else if(window["split"+splitTotal].score === 21 && dealer.blackjack === true)
    {
      DW.play();
    }

    else if(window["split"+splitTotal].score > dealer.score && window["split"+splitTotal].score <= 21)
    {

      if(window["split"+splitTotal].doubled === true)
      {
        pot.win(4);
      }

      else
      {
        pot.win(2);
      }
      PW.play();
    }
    
    else if(dealer.score > 21 && window["split"+splitTotal].score <= 21)
    {

      if(window["split"+splitTotal].doubled === true)
      {
        pot.win(4);
      }

      else
      {
        pot.win(2);
      }
      PW.play();
    }
    
    else if(window["split"+splitTotal].score === dealer.score)
    {
      pot.win(1); 
      PP.play();
    }
    
    else
    {
      DW.play();
    }
  }
 setTimeout(function(){processWin();}, 700);
};

var resetValues = function(){
  if($('div.splitHand').length!==0)//removing split hands
    {
      $('div.splitHand').remove();
    };
  player.hand = [],
  dealer.hand = [],
  player.score = 0,
  dealer.score = 0,
  splitCounter = 0,
  splitTotal = 0,
  player.playing = false,
  dealer.playing = false,
  player.blackjack = false,
  dealer.blackjack = false,
  player.doubleAvailable = false,
  player.doubled = false,
  pot.rebetted=false,
  playerTotal.html("");
  dealerTotal.html("");
  playerHand.html(player.hand);
  dealerHand.html(dealer.hand);
  dealer.scoreDisplay.css("color", "#fefefe");
  player.scoreDisplay.css("color", "#fefefe");
  shuffle();
};

var resetAnimations = function(){
  if(player.scoreDisplay.hasClass("grow"))
  {
    player.scoreDisplay.removeClass("grow");
  }

  if($('div#splitArea').hasClass('available'))
  {
    $('div#splitArea').removeClass('available');
  }
};

var endSequence = function()
{
  resetValues();
  resetAnimations();
}

//***************DISPLAY WINNER FUNCTIONS & SOUNDS**********************
var bet_sound = new Audio('./sounds/bet_sound.mp3'),
    PYB = new Audio('./sounds/place_your_bets.mp3'),
    DW = new Audio('./sounds/dealer_wins.mp3'),
    PW = new Audio('./sounds/player_wins.mp3'),
    BJ = new Audio('./sounds/blackjack.mp3'),
    PP = new Audio('./sounds/push.mp3'),
    deal = new Audio('./sounds/deal_card.mp3'),
    dbl = new Audio('./sounds/double.mp3'),
    insfunds = new Audio('./sounds/insufficient_funds.mp3'),
    shuffle_sound = new Audio('./sounds/shuffle_sound.mp3');


var win = function(){
    $('div.announcer').addClass('announce');
    $('div.announcer > div#resultPW').addClass('display');
    $('div#reset.button').addClass('available');
    $('div.reset').addClass('available');
    PW.play();
    sound = new Audio('./sounds/chip_win.mp3');
  };


var lose = function(){
    $('div.announcer').addClass('announce');
    $('div.announcer > div#resultDW').addClass('display');
    $('div#reset.button').addClass('available');
    $('div.reset').addClass('available');
    DW.play();
    sound = new Audio('./sounds/chip_lose.mp3');
  };


var push = function(){
    $('div.announcer').addClass('announce');
    $('div.announcer > div#resultP').addClass('display');
    $('div#reset.button').addClass('available');
    $('div.reset').addClass('available');
    PP.play();
    sound = new Audio('./sounds/chip_push.mp3');
  };


var BJwin = function(){
    $('div.announcer').addClass('announce');
    $('div.announcer > div#resultBJ').addClass('display');
    $('div#reset.button').addClass('available');
    $('div.reset').addClass('available');
    BJ.play();
    sound = new Audio('./sounds/chip_win.mp3');
  };







  
    



    
    

