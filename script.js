const botao = document.getElementById("saibaMais");

botao.addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});