let elmnts = document.querySelectorAll(".btn");
var lngth = elmnts.length;
var tc = 256;
function rndm() {
  for (var x = 0; x < lngth; x++) {
    var rval1 = Math.floor(Math.random() * tc);
    var rval2 = Math.floor(Math.random() * tc);
    var rval3 = Math.floor(Math.random() * tc);
    var rval4 = Math.floor(Math.random() * tc);
    var rval5 = Math.floor(Math.random() * tc);
    var rval6 = Math.floor(Math.random() * tc);
    var rval7 = 45;
    elmnts[x].style.background =
      `linear-gradient(` +
      rval7 +
      "deg," +
      "rgb(" +
      rval1 +
      "," +
      rval2 +
      "," +
      rval3 +
      ")" +
      "," +
      "rgb(" +
      rval4 +
      "," +
      rval5 +
      "," +
      rval6 +
      ")" +
      ")";
    elmnts[x].childNodes[0].innerText =
      `linear-gradient(` +
      rval7 +
      "deg," +
      "rgb(" +
      rval1 +
      "," +
      rval2 +
      "," +
      rval3 +
      ")" +
      "," +
      "rgb(" +
      rval4 +
      "," +
      rval5 +
      "," +
      rval6 +
      ")";
  }
}

rndm();

//keypress event listener
window.addEventListener("keypress", (e) => {
  if (e.key == " ") rndm();
});

//add the event listener
function copyTextEventListener() {
  //target the elmnt to add event listener
  let value = null;
  elmnts.forEach((elmnt) => {
    elmnt.addEventListener("click", (e) => {
      if (e.target.id == "bg-value") {
        value = e.target.innerText;
      } else value = e.target.childNodes[0].innerText;
      navigator.clipboard.writeText(value);
    });
  });
}

copyTextEventListener();
