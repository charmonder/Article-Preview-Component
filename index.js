
const mediaQuery = window.matchMedia("(min-width: 705px)");

$(".share-icon").click(function(){

  if (mediaQuery.matches){
    desktopClick();
  } else {
    mobileClick();
  }

})


$(".share2").click(function(){
  mobileClick();
})


function desktopClick(){
  $(".social").toggleClass("hidden");
  $(".share2").toggleClass("hidden");
  $(".share-icon").toggleClass("dark-button");
  $(".share-icon img").toggleClass("white-arrow");
}

function mobileClick(){
  $(".profile").toggleClass("hidden");
  $(".social").toggleClass("hidden");
}
