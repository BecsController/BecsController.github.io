document.addEventListener('DOMContentLoaded', start)

function start(){

  var currentIndex = 0;
  items = $('.slideshow-container div');
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slideshow-container div').eq(currentIndex);
  items.hide();
  item.css('display', 'block');
}

var autoSlide = setInterval(function(){
  currentIndex += 1;
  if (currentIndex > itemAmt - 1){
    currentIndex = 0;
  }
  cycleItems();
}, 2000);

$('.next').click(function(){
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1){
    currentIndex = 0;
  }
  cycleItems();
}, 2000);

$('.prev').click(function(){
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0){
    currentIndex = itemAmt - 1;
  }
  cycleItems();
}, 2000);

$(document).ready(function(){
  $('.click-one').click(function(){
    $('ol').toggle('.hide');
  });
});

$(document).ready(function(){
  $('.click-two').click(function(){
   $('ol').toggle('.hide');
 });
});

}
