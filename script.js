// Definir os botões da calculadora
const buttons = document.querySelectorAll('.calculator button');

// Definir o campo de entrada
const input = document.getElementById('input');

// Adicionar evento de clique para cada botão
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.textContent;
    if (buttonText === 'C') {
      // Limpar a entrada
      input.value = '';
    } else if (buttonText === 'CE') {
      // Apagar o último caractere da entrada
      input.value = input.value.slice(0, -1);
    } else if (buttonText === '=') {
      // Calcular a expressão na entrada
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Erro';
      }
    } else {
      // Adicionar o texto do botão à entrada
      input.value += buttonText;
    }
  });
});

// Registra o Service Worker para que a PWA funcione offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registrado com sucesso!', registration.scope);
    } catch (err) {
      console.error('Falha ao registrar o ServiceWorker:', err);
    }
  });
}
