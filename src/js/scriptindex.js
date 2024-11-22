// Botão de login redireciona para a página contato.html
document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = './contato.html';
});

// Alteração da cor de fundo
let cores = ["#F4E1FF", "#DAF3FF", "#FFF8D6", "#FFFFFF"];
let indexCorAtual = 0;

function MudarCorFundo() {
    indexCorAtual = (indexCorAtual + 1) % cores.length;
    document.body.style.backgroundColor = cores[indexCorAtual];
}

document.getElementById("MudarCor").addEventListener("click", MudarCorFundo);

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Alternância automática
setInterval(() => {
    changeSlide(1);
}, 5000); // Muda o slide a cada 5 segundos
