document.addEventListener('touchstart', onTouchStart, {passive: true});

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

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}