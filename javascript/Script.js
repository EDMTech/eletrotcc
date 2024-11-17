$(document).ready(function(){
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.menu li a').click(function() {
        $('.menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    
        return false;
    });
    
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 700, function() {
            $('html').css("scrollBehavior", "smooth");
        });
    });
    
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    
        if ($('.navbar .menu').hasClass("active")) {
            $('.navbar').addClass("sticky");
        } else if (window.scrollY <= 20) {
            $('.navbar').removeClass("sticky");
        }
    });
    

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor", "Criativo", "Curioso"],
        typeSpeed:200,
        backSpeed:10,
        loop:true
    });
});

// Debounce do Lodash
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function (){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Animação
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 10));
}

// Preloader
$(window).on('load', function (){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({'overflow': 'visible'});
})

// Adicionar um evento ao clicar em qualquer link de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Rolar para a seção de destino de forma suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Troca de slide a cada 3 segundos
}