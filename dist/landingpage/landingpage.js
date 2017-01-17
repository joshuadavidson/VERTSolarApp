/* establish global variables for ESLint */
/* global $ document */

// use IIFE to avoid pollution of global scope

  $(document).ready(function () {
    var cards = $('.card').hide();
    var i = 0;

    var cycleCards = function () {
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
