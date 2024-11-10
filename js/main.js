//페이지 아래로 스크롤시 header 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight)
document.addEventListener('scroll',()=>{
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹셔을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight
})

// Top UP버튼을 아래로 스크롤시 투명하게 처리함
const ArrowUp = document.querySelector('.top-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
        ArrowUp.style.opacity = 1
    }else{
        ArrowUp.style.opacity = 0
    }
})

document.addEventListener("DOMContentLoaded", function () {
    // Top Up 버튼 가져오기
    const topUpBtn = document.getElementById("topUpBtn");

    // 버튼 클릭 시 부드럽게 상단으로 이동
    topUpBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});

// nav바 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

// 토글 버튼 클릭 시 메뉴 열고 닫기
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// 메뉴 아이템 클릭 시 메뉴 닫기
const menuItems = document.querySelectorAll('.header__menu__item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navbarMenu.classList.remove('open');
    });
});