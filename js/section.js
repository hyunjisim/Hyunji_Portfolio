document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentSectionIndex = 0;
    let isScrolling = false;

    // 휠 이벤트 추가
    window.addEventListener("wheel", function (event) {
        if (isScrolling) return; // 이미 스크롤 중일 때는 새로운 스크롤을 막음

        if (event.deltaY > 0) {
            // 아래로 스크롤
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
            }
        } else {
            // 위로 스크롤
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(currentSectionIndex);
            }
        }
    }, { passive: false }); // passive: false를 사용하여 기본 스크롤을 막음

    // 섹션으로 부드럽게 이동하는 함수
    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });

        // 스크롤 애니메이션이 끝날 때까지 기다림 (약 800ms 정도)
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.header__menu__item');

    const observerOptions = {
        root: null, // viewport를 root로 사용
        rootMargin: '0px',
        threshold: 0.6 // 섹션의 60%가 화면에 들어오면 활성화
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(activeSection)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
