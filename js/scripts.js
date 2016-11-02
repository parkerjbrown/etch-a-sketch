$(document).ready(function(){
  var createGrid = function(gridSize) {
    moduleSize = 100/gridSize + '%';
    moduleCount = Math.pow(gridSize, 2);
    module = '<div class="module"></div>';

    for (i = 0; i < moduleCount ; i++) {
      $('#container').append(module);
    }
    
    $('.module').css({"height": moduleSize, "width": moduleSize});

    $('.module').hover(function(){
      $(this).addClass('moduleHover');
      $(this).removeClass('module');
    });
  }

  $("#createGrid").on("click", function(){
    $('#container').empty();
    var newSize = prompt("Please enter a number below (2-100 work best):");
    createGrid(newSize);
  });

  $("#clearGrid").on("click", function(){
    $('.moduleHover').addClass('module');
    $('.moduleHover').removeClass('moduleHover');
    $('h1').effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
  });
  
  createGrid(50);
});