const navbar = document.getElementById("toggle");
const el = document.getElementsByTagName("i")[0];
const refund_modal = document.getElementById("refund-modal");
const btn = document.getElementById("r-btn");

// SideBar toogle
navbar.onclick = function () {
  el.classList.toggle("hamburger-close");
};
navbar.addEventListener("click", () => {
  $("#list-2").toggleClass("show");
});

// refund_modal

btn.addEventListener("click", () => {
  refund_modal.classList.add("close-refund-acc");
});

$("body #link-1").hover(function () {
  $("body #link-1").toggleClass("changeColor"); // 2
});

$("body #link-2").hover(function () {
  $("body #link-2").toggleClass("changeColor"); // 2
});

$("body #link-3").hover(function () {
  $("body #link-3").toggleClass("changeColor"); // 2
});

$("body #link-4").hover(function () {
  $("body #link-4").toggleClass("changeColor"); // 2
});

$("body #link-5").hover(function () {
  $("body #link-5").toggleClass("changeColor"); // 2
});

$("body #link-6").hover(function () {
  $("body #link-6").toggleClass("changeColor"); // 2
});

$("body #link-7").hover(function () {
  $("body #link-7").toggleClass("changeColor"); // 2
});

$("body #link-8").hover(function () {
  $("body #link-8").toggleClass("changeColor"); // 2
});

$("body #link-9").hover(function () {
  $("body #link-9").toggleClass("changeColor"); // 2
});

$("body #link-10").hover(function () {
  $("body #link-10").toggleClass("changeColor"); // 2
});

$("body #link-11").hover(function () {
  $("body #link-11").toggleClass("changeColor"); // 2
});

$("body #link-12").hover(function () {
  $("body #link-12").toggleClass("changeColor"); // 2
});

$("body #link-13").hover(function () {
  $("body #link-13").toggleClass("changeColor"); // 2
});

$("body #link-14").hover(function () {
  $("body #link-14").toggleClass("changeColor"); // 2
});
$("body #link-15").hover(function () {
  $("body #link-15").toggleClass("changeColor"); // 2
});
