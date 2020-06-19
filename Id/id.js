var usersDate = [
  {
    firstName: "shaul",
    firstName: "mazor",
    address: "menachem begin 77 cfar yona",
  },
  {
    fullName: "Sm",
    adrres: "menachem begin 77 cfar yona",
  },
  { 
      fullName: "Hm", adrres: "menachem begin 77 cfar yona"
  },
  {
    fullName: "Am",
    adrres: "menachem begin 77 cfar yona",
  },
  {
    fullName: "Rm",
    adrres: "menachem begin 77 cfar yona",
  },
  {
    fullName: "Ym",
    adrres: "yocneam elite ",
  },
  {
    fullName: "Bh",
    adrres: "cfar saba",
  },
  {
    fullName: "mm",
    adrres: "criat motzkin",
  },
  {
    fullName: "Rm",
    adrres: "harzelia",
  },
];

function build(num) {

    if(num == 1){
        document.querySelector('.name_id1').innerHTML = usersDate[0].fullName;
        document.querySelector('.adrres_id1').innerHTML = usersDate[0].adrres;
        document.querySelector('.name_id2').innerHTML = usersDate[1].fullName;
        document.querySelector('.adrres_id2').innerHTML = usersDate[1].adrres;
        document.querySelector('.name_id3').innerHTML = usersDate[2].fullName;
        document.querySelector('.adrres_id3').innerHTML = usersDate[2].adrres;
    }
    if(num == 2){
        document.querySelector('.name_id1').innerHTML = usersDate[3].fullName;
        document.querySelector('.adrres_id1').innerHTML = usersDate[3].adrres;
        document.querySelector('.name_id2').innerHTML = usersDate[4].fullName;
        document.querySelector('.adrres_id2').innerHTML = usersDate[4].adrres;
        document.querySelector('.name_id3').innerHTML = usersDate[5].fullName;
        document.querySelector('.adrres_id3').innerHTML = usersDate[5].adrres;
    }
    if(num == 3){
        document.querySelector('.name_id1').innerHTML = usersDate[6].fullName;
        document.querySelector('.adrres_id1').innerHTML = usersDate[6].adrres;
        document.querySelector('.name_id2').innerHTML = usersDate[7].fullName;
        document.querySelector('.adrres_id2').innerHTML = usersDate[7].adrres;
        document.querySelector('.name_id3').innerHTML = usersDate[8].fullName;
        document.querySelector('.adrres_id3').innerHTML = usersDate[8].adrres;
    }
}
