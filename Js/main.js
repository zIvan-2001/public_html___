window.addEventListener("scroll", function () {
  const box = document.querySelector("section");
  const altura = window.innerHeight / 1.3;
  const distancia = box.getBoundingClientRect().top;

  console.log(altura);
  console.log(distancia);

  if (distancia <= altura) {
    box.classList.add("aparece");
  } else {
    box.classList.remove("aparece");
  }
});
