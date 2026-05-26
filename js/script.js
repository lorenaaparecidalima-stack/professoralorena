// MENSAGEM DE BOAS-VINDAS

window.addEventListener("load", () => {

  setTimeout(() => {

    alert("Bem-vinda ao Blog da Professora!");

  }, 1000);

});



// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";

  });

});



// BOTÃO VOLTAR AO TOPO

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#3498db";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "24px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
botaoTopo.style.zIndex = "999";

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    botaoTopo.style.display = "block";

  } else {

    botaoTopo.style.display = "none";

  }

});

botaoTopo.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});



// EFEITO DIGITANDO NO TÍTULO

const titulo = document.querySelector(".banner h2");

const texto = "Educação transforma vidas";

let contador = 0;

function escreverTexto(){

  if(contador < texto.length){

    titulo.innerHTML += texto.charAt(contador);

    contador++;

    setTimeout(escreverTexto, 100);

  }

}

titulo.innerHTML = "";

escreverTexto();



// MUDAR COR DO MENU AO ROLAR

const menu = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    menu.style.background = "#1a252f";

  } else {

    menu.style.background = "#34495e";

  }

});
