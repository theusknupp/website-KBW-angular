export function observeElement(
  element: Element, //Elemento a ser observado
  className: string = 'animate',
  threshold: number = 0.3
) {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Quando o elemento entrar na tela (threshold atingido)
        entry.target.classList.add(className);
        observerInstance.unobserve(entry.target); // Remove observador após a primeira animação
      }
    });
  }, { threshold }); // Define o quanto do elemento precisa estar visível

  observer.observe(element); // Inicia a observação do elemento
}

