function getDevivde() {
  var x1 = 0;
  var y1 = 0;
  var x = $('.input1').val();
  var y = $('.input2').val();
  for (var i = 1; i < x; i++) {
    if (x % i == 0) {
      x1 += i;
    }
  }
  for (var i = 1; i < y; i++) {
    if (y % i == 0) {
      y1 += i;
    }
  }

  if (x1 == y && y1 == x) {
    alert(`the number: ${x} is friend number to number: ${y}`);
  }else{
    alert(`the number: ${x} is not friend number to number: ${y}`);
  }
}


