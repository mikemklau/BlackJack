//PLAYER CONSTRUCTOR
function Player(name, handDisplay, scoreDisplay){
  this.name = name,
    this.hand = [],
    this.handDisplay = handDisplay,
    this.score = 0,
    this.scoreDisplay = scoreDisplay,
    this.playing = false,
    this.betTotal= 0,
    this.bank = 1000,
    this.splitAvailable = false,
    this.doubleAvailable = false,
    this.doubled = false,
    this.blackjack= false,
    this.hit = function()
        {
        if(this.playing===true && dealer.playing === false && this.score < 21)
          {  
          if(fullDeck.length === 0) //no more cards, in case of error
            {
              window.alert("No more cards....");
            }   
          else
            {
              dealCard(this);
            }

            this.checkTurn();
          }
        },

      //maybe add css when each person is playing a light up player name shows in corner or screen

    this.double = function()//only player can do this
      {
        double(this);
    },

    this.findAces = function()
      {
        findAces(this); //function can be found in blackjack.js file that is called before this file
      },

    this.processAces = function()
      {
        processAces(this);//function can be found in blackjack.js file that is called before this file
      },

    this.calculateTotalScore = function()
      {
        calculateTotalScore(this); //function can be found in blackjack.js file that is called before this file
      },

    this.updateScore = function()
      {
        updateScore(this);//function can be found in blackjack.js file that is called before this file
      },

    this.checkTurn = function()//function to automatically end turn if conditions are met
      {
        if(this.score === 21)
        {
          scoreDisplay.addClass('grow');
          this.playing = false;
          dealer.playing = true;
          setTimeout(function(){dealer.flip();},500);
        }

        else if(this.score > 21)
        {
          scoreDisplay.css("color", "red");
          this.playing = false;
          dealer.playing = true;
          setTimeout(function(){dealer.flip();},500);                     
        }
      },

  this.stand = function()
     {
      if(this.hand.length >= 2)
        {
          this.playing = false;
            dealer.playing = true;
            dealer.flip();
          }
     },

    this.split = function()
      {
        if(this.splitAvailable === true)
          {
          create_split_player();
          if(splitCounter<=1)//meaning that there is only 1 split so the card is popped from player
          {
            this.hand.pop();//removes last card in players hand which is [1]
            this.handDisplay.html(this.hand);//update displays by this point scores and visuals have been updated
          }

          else//meaning there is more than 1 split therefore the previous splitter is popped
          {
            this.hand.pop();
          }

            pot.split();
            this.splitAvailable = false; //put back to false before it gets check for split avaiable below
            this.updateScore();
            this.handDisplay.html("<div class='playingCard'><img src='css/png/"+this.hand+".png'></div>");//update displays byt this point scores and visuals have been updated
            setTimeout(function(){window["split"+splitCounter].hit();}, 300);
          }
     }
    };

//Player INSTANCE

var player = new Player("Player1", playerHand, playerTotal);


//SPLIT INSTANCE
  

function create_split_player(){//has to be all global to work

    //for dynamic variable naming so that each split has a different object instance rather than overwriting same one
    splitCounter+=1;
    splitTotal+=1;

    window["split"+splitCounter] = new Player("split"+splitCounter); //modified player instance for splitters, different functionality//for dynamic variable naming so that each split has a different object instance rather than overwriting same one

    if(splitCounter>1)
      {
        splitHandDisplay = "<div id='split"+splitCounter+"' class= 'splitHand'><div class='playingCard'><img src='css/png/"+window["split"+(splitCounter-1)].hand[1]+".png'></div></div>   <div id='split"+splitCounter+"Total' class='splitHand'></div>";        
      }
    else
      {
        splitHandDisplay = "<div id='split"+splitCounter+"' class= 'splitHand'><div class='playingCard'><img src='css/png/"+player.hand[1]+".png'></div></div>   <div id='split"+splitCounter+"Total' class='splitHand'></div>";
      }   

      $("#playerTotal").after(splitHandDisplay);//insert new player into the DOM 
      
      if(splitCounter<=1)
      {
        window["split"+splitCounter].hand = [player.hand[1]];//split object's hand takes second card of player object
      }

      else
      {
        window["split"+splitCounter].hand = [window["split"+(splitCounter-1)].hand[1]];
      }

      window["split"+splitCounter].playing = true, //if this is true modify CSS so that buttons control this instance rather than player instance
      window["split"+splitCounter].handDisplay = $("div#split"+splitCounter),//this is not placed in the instance call because I wanted this whole function to create the DOM element first and then only this can be set after as explained below too
      window["split"+splitCounter].scoreDisplay = $("div#split"+splitCounter+"Total"),// couldnt put in beginning of program because this =[] if i put in beginning, because splitHandDisplay didnt exist untill split funciton happens, now that it exists it can be assigned
      window["split"+splitCounter].bank = player.bank,//splitters dont have banks of their own
      window["split"+splitCounter].betTotal = pot.bet,
      window["split"+splitCounter].hit = function()//different from player because it doesnt need to check dealers playing status 
      {
            
         if(window["split"+splitCounter].playing===true)
          {  
          if(fullDeck.length === 0) //no more cards, in case of error
            {
              window.alert("No more cards....");
            } 
          
          else if(window["split"+splitCounter].score >= 21)
            {
              window.alert("this shouldnt be possible must make sure css disables this because checkturn() should have made this obselete"); // blot out the click on hit button
              window["split"+splitCounter].playing = false;//css to revert buttons to operating the player of the next split player
            } 
           
          else
            {
              dealCard(window["split"+splitCounter]);
            }
          window["split"+splitCounter].checkTurn();
          }         
      },


      window["split"+splitCounter].stand = function()
      {
        window["split"+splitCounter].playing = false;// just turn off split play

        splitCounter-=1;

        if(splitCounter === 0)
          {
            $('div.s_button').attr('class', 'button');
            setTimeout(function(){player.hit();},300);
          }
        else
        {
          setTimeout(function(){window["split"+splitCounter].hit();},300);
        }
      },

      window["split"+splitCounter].checkTurn = function()
      {
       
            if(window["split"+splitCounter].hand.length === 2)
            {
            checkForBlackjack(window["split"+splitCounter]);
            checkForSplit(window["split"+splitCounter]);
            checkForDouble(window["split"+splitCounter]);
          };

        if(window["split"+splitCounter].score === 21 && window["split"+splitCounter].blackjack === false)
          {
            window["split"+splitCounter].scoreDisplay.addClass('grow');
            window["split"+splitCounter].stand(); //players turn or next splits turn
          }

          else if(window["split"+splitCounter].score > 21)
          {
            window["split"+splitCounter].scoreDisplay.css("color", "red");
            window["split"+splitCounter].stand();  //players turn or next splits turn
          }
      };

  window["split"+splitCounter].updateScore();//must be updated in this function call because split counter will be something different once this function ends
};

