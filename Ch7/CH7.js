const numberForm = document.querySelector('#number-form');
const maxNumInput = document.querySelector('#maxNumber');
const guessNumInput = document.querySelector('#guessNumber');
const numbercheck = document.querySelector('#numbercheck');
const $match = document.querySelector('#match');

const HIDDEN_CLASSNAME = 'hidden';

function onNumberSet(event) {
    event.preventDefault();
    const maxNum = maxNumInput.value;
    const guessNum = guessNumInput.value;
    const machineNum = Math.ceil(Math.random() * maxNum);
    if (maxNum < 0 || guessNum < 0) {
        return;
    } else if (parseInt(guessNum) > parseInt(maxNum)) {
        return;
    }
    numbercheck.innerHTML = `You chose: ${guessNum}, the machine chose: ${machineNum}.`;
    numbercheck.classList.remove(HIDDEN_CLASSNAME);
    if (parseInt(guessNum) === parseInt(machineNum)) {
        $match.innerHTML = `You won!`;
        $match.classList.remove(HIDDEN_CLASSNAME);
    } else {
        $match.innerHTML = `You lost!`
        $match.classList.remove(HIDDEN_CLASSNAME);
    }
}

numberForm.addEventListener("submit",onNumberSet);
