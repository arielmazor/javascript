
function buildRow(str,num){
return `<div class = "row">
<div class="num">${num}</div>
<div class="dividers">${str}</div>
</div>`;
}


function getPerfectNum(n) {
  var res = 0;
  var str = "";
  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      res += i;
      str += `${i},`
    }
  }
  if(res == n){
   return buildRow(str,n)
  }
  return "";
}

function printPerfectNum(num) {
  var strRow = "";
  var row = "";
  for (var i = 1; i < num; i++) {
    row = getPerfectNum(i);
    strRow += row;
  }
  document.querySelector('.table-body').innerHTML = strRow;
}

printPerfectNum(100);
