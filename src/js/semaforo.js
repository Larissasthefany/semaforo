let currentColor = 'red'
const popup = document.getElementById('popup'); // Selecionando o elemento do popup

function showMessage(message) {
    if (popup) { // Verifica se o elemento popup foi encontrado
        popup.textContent = message;  // Define o texto da mensagem no popup
        popup.classList.add('show');  // Adiciona a classe 'show' para exibir o popup
        setTimeout(() => {
            popup.classList.remove('show');  // Remove a classe 'show' após 3 segundos, ocultando o popup
        }, 3000);
    } else {
        console.error('Elemento popup não encontrado!');
    }
}

function changeColor() {
    const redLight = document.querySelector('.red');
    const yellowLight = document.querySelector('.yellow');
    const greenLight = document.querySelector('.green')

    //Apaga todas as luzes
    redLight.style.opacity = '0.2';
    yellowLight.style.opacity = '0.2';
    greenLight.style.opacity = '0.2';


    //Liga a luz correspondente
    switch (currentColor) {
        case 'red':
            redLight.style.opacity = '1';
            showMessage('Vermelho: Pare!');
            currentColor = 'yellow'
            break;

        case 'yellow':
            yellowLight.style.opacity = '1';
            showMessage('Amarelo: Preste atenção!');
            currentColor = 'green'
            break;

        case 'green':
            greenLight.style.opacity = '1'
            showMessage('Verde: Siga!');
            currentColor = 'red';
            break

        default:
            console.log('O semáforo está quebrado!')
            break;
    }
}

setInterval(changeColor, 4000);
