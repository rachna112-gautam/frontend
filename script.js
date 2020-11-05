const navbar = document.getElementById("toggle");
const el = document.getElementsByTagName("i")[0];

// SideBar toogle
navbar.onclick = function () {
  el.classList.toggle("hamburger-close");
};
navbar.addEventListener("click", () => {
  $("#list-2").toggleClass("show");
  $(".account-container").toggleClass("index-toggle");
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

$("#dots").click(() => {
  $("#list-content").toggle();
});

$("#Deposit").click(() => {
  $(".refund-acc").toggle();
});
// refund_modal

$("#r-btn").click(() => {
  $(".refund-acc").toggle();
});
