/* establish global variables for ESLint */
/* global $ document */

// use IIFE to avoid pollution of global scope

  $(document).ready(function () {
    // get an array of the card elements
    var cards = $('.card').hide();
    // variable to control card iteration
    var i = 0;

    // function to cycle cards indefinitely
    var cycleCards = function () {
      // grab a single card from the array and manipulate it
      cards.eq(i)
        .fadeIn(1000)
        .delay(4000)
        .fadeOut(1000, cycleCards);

      // Loop through the cards indefinitely
      // when reaching length reset to 0
      i = ++i % cards.length;
    };
    cycleCards();
  });
