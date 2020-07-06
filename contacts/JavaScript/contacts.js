var obj = [
  {
    src:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    fullName: "Yafa mazor",
    address: "yocneam elite",
    gender: "male",
    phoneNumber:"972526543631",
    delete:"../Images/delete.png",
    edit:"../Images/edit.png"
  },
  {
    src:
      "https://s.yimg.com/ny/api/res/1.2/tKkCUB5xgXhjeL1CzWIfKQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/people_218/fa7c9bfd3d17b7170efd15f840684e0f",
    fullName: "Bh",
    address: "cfar saba",
    gender: "fimale",
    phoneNumber:"972526543631",
    delete:"../Images/delete.png",
    edit:"../Images/edit.png"
  },
  {
    src:
      "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",
    fullName: "mm",
    address: "criat motzkin",
    gender: "male",
    phoneNumber:"972526543631",
    delete:"../Images/delete.png",
    edit:"../Images/edit.png"
  },
  {
    src:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    fullName: "Rm",
    address: "harzelia",
    gender: "fimale",
    phoneNumber:"972526543631",
    delete:"../Images/delete.png",
    edit:"../Images/edit.png"
  },
];

function build() {
  let template = _.template($("#contant-script").html());
  $(".row-wrapper").html(template(obj));
}

function editRow(){
}
function showModal(index) {

   let template = _.template($("#contant").html());
   $(".modal .content .body").html(template(obj[index]));

  $(".modal").addClass("show1");
}

function closeModal() {
  $(".modal").removeClass("show1");
}
build();