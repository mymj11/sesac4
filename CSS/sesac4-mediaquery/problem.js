// js 동작 채우기

// 요소 2개 가져오기
// 아래 2요소 사이에 동작이 일어나니까
const icon_menu = document.querySelector('.icon_menu');
const slide_menu = document.querySelector('.slide_menu');

icon_menu.addEventListener('click', function(){
    // console.log(silde_menu.classList);
    slide_menu.classList.toggle('d-none');
});

// icon_menu를 클릭할 때마다 나타났다가 사라지는 메서드가 classList.toggle()이다.
// 노란 박스(슬라이즈 메뉴)도 사라졌다가 없어졌다 해야하니까 css에서 .slide_menu.d-none {
//     display : none;
// }


// jQuery
//const icon_menu = $('.icon_menu');
//const slide_menu = $('.slide_menu');

// icon_menu.on('click', function(){
//     slide_menu.toggleClass('d-none');
// });

