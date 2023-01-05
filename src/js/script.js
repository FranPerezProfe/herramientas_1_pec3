
let upButtom = document.getElementById("up_buttom");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    upButtom.style.display = "block";
  } else {
    upButtom.style.display = "none";
  }
}

window.addEventListener('scroll', scrollFunction, { passive: true });

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

upButtom.addEventListener('touchstart', topFunction, { passive: true });