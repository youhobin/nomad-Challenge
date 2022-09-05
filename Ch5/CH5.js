const hello = document.querySelector("h1");
const colors = document.querySelector('body');

hello.style.color = "white";
colors.className = 'blue'

function handleResize() {
    const width = window.innerWidth;
    if (width < 800) {
        colors.style.backgroundColor = '#3498db';
      } else if (width >= 800 && width < 1000){
        colors.classList.remove('blue');
        colors.classList.add('purple');
        colors.style.backgroundColor = "#9b59b6";
      } else if (width >= 1000) {
        colors.classList.remove('purple');
        colors.classList.add('green');
        colors.style.backgroundColor = "#1abc9c";
      }
}

window.addEventListener('resize', handleResize);

