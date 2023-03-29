// Armazena a referência ao campo de entrada
const input = document.querySelector('#input');

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

// Adiciona o ouvinte de eventos de clique em cada botão
document.querySelectorAll('.calculator button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      input.value = '';
    } else if (value === 'CE') {
      input.value = input.value.slice(0, -1);
    } else if (value === '=') {
      input.value = eval(input.value);
    } else {
      input.value += value;
    }
  });
});
