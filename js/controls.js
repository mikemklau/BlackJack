
//BUTTON FUNCTIONS
$(".bet").on("click", function()
  { 
    if(player.hand.length === 0)
    {
      bet_sound.play();
      var bet = this.innerHTML;
      pot.add(parseFloat(bet));
      pot.display();
    }
  });


clearButton.on("click", function()
{
  if(player.hand.length === 0)
  {
    pot.clear();
    pot.display();
    pot.rebetted=false;
  }
});

  dealButton.on("click", function()
  {
    dealer.deal();
  });

  $(document).on("click", "div#hit.button", function() //due to dynamic changes that why the use of a different eventlistening style
  {
    player.hit(); 

    if($('div#splitArea').hasClass('available'))
    {
      $('div#splitArea').removeClass('available');
    }
  });

$(document).on("click", "div#stand.button", function()
  {
    if(dealer.hand.length === 1)//stop multi clicks
    {
        player.stand();
        if($('div#splitArea').hasClass('available'))
        {
        $('div#splitArea').removeClass('available');
        }
    }

  });

$(document).on("click", "div#split.button", function()
  { 
    if(player.hand.length === 2 && player.splitAvailable === true) 
    {
      if(pot.bet>player.bank)
      {
        insfunds.play();
      }
      
      else
        {
          pot.display();
          player.split();
          //************************CSS***********************
          $('div.button:not(#reset)').attr('class', 's_button');

          $('div.s_button').on("mousedown", function(e){ //for split buttons CSS reactions
            var ID = e.currentTarget.id;
            $('div#'+ ID + '.s_button').addClass('pressed');
          });

          $('div.s_button').on("mouseup mouseleave", function(e){
            var ID = e.currentTarget.id;
            $('div#'+ ID + '.s_button').removeClass('pressed');
            $('div#buttonTitles > div.'+ ID).removeClass('grow');
            $('div.split').removeClass('grow');
          });
          $('div#splitArea').removeClass('available');//after split button click button goes
          //************************CSS*************************
        }
    }
  });


$(document).on("click", "div#double.button", function()
  {
    if(player.doubleAvailable === true && player.hand.length === 2)//stop multi clicks
    {
      if(pot.bet>player.bank)
      {
        insfunds.play();
      }
      else
      {
        player.double();
        dealCard(player);
        player.stand();
      }
    }
  });

rebetButton.on("click", function()
{
  if(dealer.hand.length === 0 && player.hand.length === 0)//stop multi clicks
  {
    
    if(pot.retainedBet>player.bank)
    {
      insfunds.play();
    }

    else if(pot.rebetted===false)
      {
        bet_sound.play();
        pot.rebet();
      }
  }    
});

newGameButton.on("click", function()
{
  endSequence();
  $('div#reset.button').removeClass('available');
  $('div.reset').removeClass('available');
  $('div.announcer > div.display').removeClass('display');
  $('div.announcer').removeClass('announce');
  pot.calculate();
  sound.play();
  pot.grandTotal=0; 
});

//SPLIT BUTTONS same as above but or split

$(document).on("click", "div#hit.s_button", function()
  {
    window["split"+splitCounter].hit(); 
    if($('div#splitArea').hasClass('available'))
    {
      $('div#splitArea').removeClass('available');
    }
  });

$(document).on("click", "div#stand.s_button", function()
  {
    window["split"+splitCounter].stand();
    if($('div#splitArea').hasClass('available'))
    {
      $('div#splitArea').removeClass('available');
    }
  });

$(document).on("click", "div#split.s_button", function()
  {
    if(window["split"+splitCounter].hand.length === 2 && window["split"+splitCounter].splitAvailable === true)
    {
      if(pot.bet > player.bank)
      {
        play.insfunds
      }
      else
      {
        pot.display();
        window["split"+splitCounter].split();
      }

      $('div#splitArea').removeClass('available');//after split button click button goes
    }
  });

$(document).on("click", "div#double.s_button", function()
  {
    if(window["split"+splitCounter].doubleAvailable === true && window["split"+splitCounter].hand.length === 2)//stop multi clicks
    {
      window["split"+splitCounter].double();
      window["split"+splitCounter].hit();
      setTimeout(function(){window["split"+splitCounter].stand();}, 500);
    }
  });

pot.display();//display wallet area when everything loaded

