//DEALER objects
var dealer =
    { 
      name : "Dealer ",
      hand : [],
      handDisplay : dealerHand,
      score : 0,
      scoreDisplay : dealerTotal,
      playing : false,
      blackjack : false,
      deal: function() //start game button will do this
        { 

          if(this.hand.length === 0 && player.hand.length === 0)
            { // so u can only deal once, if the score isnt zero no deal
             //deals first hand
             //add timed delay function
            if(player.hand.length===0 && pot.bet===0)
              {
              //draw cards into player and dealer array
               PYB.play();
              }

            else
              {
                dealCard(player),
                setTimeout(function(){dealCard(dealer);}, 300),
                setTimeout(function(){dealCard(player);}, 700),
                setTimeout(function(){dealFacedown(dealer);}, 1000),
                setTimeout(function(){checkForBlackjack(player);}, 1100); //this function decides whether player.playing is true or fase BJ = false ofcourse
                setTimeout(function(){checkForSplit(player);}, 1200);
                setTimeout(function(){checkForDouble(player);}, 1300);
              }   
            }
        },

      flip: function()
      {
        $('#cardback').remove();
        dealCard(this);
        this.playTurn();
      },

      playTurn : function()
      { 
        if(this.playing === true && player.playing === false && splitTotal ===0 )
        {
          if(player.score > 21)
            {
              this.playing = false;
              processWin();
            }

          else if(this.hand.length === 2 && this.score === 21)
          {
            this.blackjack = true;
            this.playing = false;
            processWin();
          }

          else if(this.score === 21)//this needs to be here for when dealer gets blackjack otherwise dealer hits
          {
            this.playing = false;
            processWin();
          }
            
          else if(this.score >= 17)
          {
            this.playing = false;
            processWin();
            //can add a function for losing instead of having here
          }
         
          else
            {
              setTimeout(function(){dealCard(dealer);}, 300);
              setTimeout(function(){dealer.playTurn();}, 400);
            }
        }

        else if(this.playing === true && player.playing === false && splitTotal > 0)
        {
          if(player.score > 21)
            {
              this.scoreDisplay.css("color", "red");
              this.playing = false;
              dealCard(this);
              processSplitWin();
            }

          else if(this.hand.length === 2 && this.score === 21)
          {
            this.blackjack = true;
            this.playing = false;
            processSplitWin();
          }

          else if(this.score === 21)//this needs to be here for when dealer gets blackjack otherwise dealer hits
          {
            this.playing = false;
            processSplitWin();
          }
              
            
          else if(this.score >= 17)//I can add process wins in these conditions instead of 21 in this case it could be player score
            {
              this.playing = false;
              processSplitWin();
            }
         
          else
            {
              setTimeout(function(){dealCard(dealer);}, 300);
              setTimeout(function(){dealer.playTurn();}, 400);
            }
        }
      },

      findAces : function()
      {
        findAces(this); 
      },

      processAces : function()
      {
        processAces(this);
      },

      calculateTotalScore : function()
      {
        calculateTotalScore(this); 
      },

      updateScore : function()
      {
        updateScore(this);
      }
    };

