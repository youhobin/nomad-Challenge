const clock = document.querySelector('h1');
const $loginInput = document.querySelector('#loginInput');
const $loginBtn = document.querySelector('#loginButton');


function getClock () {
    const today = new Date();
    const todayHours = String(today.getHours()).padStart(2,'0');
    const todayMinutes = String(today.getMinutes()).padStart(2,'0');
    const todaySeconds = String(today.getSeconds()).padStart(2,'0');
    clock.innerText = `${todayHours}:${todayMinutes}:${todaySeconds}`;
}
getClock();
setInterval(getClock, 1000);

$loginBtn.addEventListener('click',function(event) {
    event.preventDefault();
    localStorage.setItem('username',$loginInput.value);
})
