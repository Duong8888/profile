var box = document.querySelector('.Image');
var video = document.querySelector('.video');
var img = document.querySelector('.Image>img');

box.addEventListener('mouseover',function(){
    video.play();
    video.style.zIndex = '10';
    img.style.zIndex = '9';
});
box.addEventListener('mouseout',function(){
    video.style.zIndex = '9';
    img.style.zIndex = '10';
});