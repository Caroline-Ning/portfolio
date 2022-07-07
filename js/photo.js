function heightToTop(ele) {
  let bridge = ele;
  let root = document.body;
  let height = 0;
  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);

  return height;
}

let cbtn = document.getElementById("cbtn");
let sbtn = document.getElementById("sbtn");
let bjbtn = document.getElementById("bjbtn");
let wcbtn = document.getElementById("wcbtn");
let slbtn = document.getElementById("slbtn");
let gdbtn = document.getElementById("gdbtn");

let conceptual = document.getElementById("conceptual");
let scenery = document.getElementById("scenery");
let beijing = document.getElementById("beijing");
let west = document.getElementById("west");
let still = document.getElementById("still");
let gd = document.getElementById("gd");

cbtn.addEventListener("click", function () {
  window.scrollTo({
    top: heightToTop(conceptual),
    behavior: "smooth",
  });
});
sbtn.addEventListener("click", function () {
  window.scrollTo({
    top: heightToTop(scenery),
    behavior: "smooth",
  });
});
bjbtn.addEventListener("click", function () {
  window.scrollTo({
    top: heightToTop(beijing),
    behavior: "smooth",
  });
});
wcbtn.addEventListener("click", function () {
  window.scrollTo({
    top: heightToTop(west),
    behavior: "smooth",
  });
});
slbtn.addEventListener("click", function () {
  window.scrollTo({
    top: heightToTop(still),
    behavior: "smooth",
  });
});
gdbtn.addEventListener("click", function () {
  console.log("gbbtn");
  window.scrollTo({
    top: heightToTop(gd),
    behavior: "smooth",
  });
});
