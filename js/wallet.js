 //Wallet banks and bets object
var pot = {
  bet: 0,//INITIAL BET
  betTotal: 0, //ALL BETS FOR DISPLAY
  grandTotal:0,//CALCULATION OF ALL LOSS AND WINNINGS
  retainedBet: 0,
  rebetted: false,
  rebet: function()
  {
      this.bet = this.retainedBet;
      player.bank -= this.retainedBet;
      this.display();
      this.rebetted = true;
  },

  win:function(multiplier)
  {
    multiplier *= this.bet; //if multiplier = 2 that means 2 bet wins. so 2 wins basicaly or 2 x initial bets
    this.grandTotal += multiplier;
  },

 split: function()//SAME AS DOUBLE
 {
 	if(this.bet>player.bank)
    {
      insfunds.play();
    }

    else
    {
      this.betTotal += this.bet; //Add another INITIAL BET
      player.bank -= this.bet; // DEDUCT FROM BANK
      this.display();
    }
 },

  double: function()
  {
    if(this.bet>player.bank)
    {
      insfunds.play();
    }

    else
    {
      this.betTotal += this.bet, 
      player.bank -= this.bet; 
      this.display();
    }
  },

  add: function(chip)
  {
    if(chip>player.bank)
    {
      insfunds.play();
    }

    else
    {
      this.bet += chip,
      player.bank -= chip;
      this.display();
    }
  },

  clear: function()
  {
    player.bank += this.bet,
    this.bet = 0;
  },
  
  calculate : function()//final function calculates everything then resets scores
  {
    player.bank+= this.grandTotal;
    this.retainedBet = this.bet;
    this.bet = 0;
    this.betTotal = 0;
    pot.display();
  },

  display: function()
  {
    betArea.html(this.bet + this.betTotal);
    bankArea.html(player.bank);
  }
};


