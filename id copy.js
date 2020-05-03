var userDate = [
  {
    firstName: "Shaul",
    lastName: "Mazor",
    address: "menachem begin 77 cfar yona",
  },
  {
    firstName: "Shaul",
    lastName: "Mazor",
    address: "menachem begin 77 cfar yona",
  },
  {
    firstName: "Shaul",
    lastName: "Mazor",
    address: "menachem begin 77 cfar yona",
  },
  {
    firstName: "Shaul",
    lastName: "Mazor",
    address: "menachem begin 77 cfar yona",
  },
];
function buildRow(obj) {
  var res = "";
  
  res += `<div class = "name"> ${obj.firstName.substring(0, 1)}${obj.lastName.substring(0, 1)}</div>`;
  res += `<div class = 'addres'>${obj.address}</div>`;
  return `<div class = "id">${res}</div>`
}
function buildInfo() {
  var res = "";
  for (var i = 0; i < userDate.length; i++) {
    res += buildRow(userDate[i],i);
  }
  document.querySelector(".wrapper").innerHTML = res;
  document.querySelector(".counter").innerHTML = '('+i+')'
}
buildInfo();
