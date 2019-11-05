$(function() {
  var i = Math.ceil(Math.random() * 100);
  var x = 0;
  $('#btnValidate').click(function() {
    let guess = Math.floor($('input').val());
    x = x + 1;
    if ( !isNaN(guess) && guess >= 0 && guess <= 100 && guess != '') {
      if (guess < i) {
        alert("C'est plus !")
      } else if (guess > i) {
        alert("C'est moins !")
      } else if(guess = i) {
        alert('Trouvé !' + "\nNombre d'essai : " + x);
      };
    } else {
      alert('proot');
    };
  });
  $('#btnRandom').click(function() {
    i = Math.ceil(Math.random() * 100);
    $('input').val('');
  });
});
