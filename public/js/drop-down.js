const dropdownButtonAccount = document.getElementById('dropdownButtonAccount');
const dropdownMenuAccount = document.getElementById('dropdownMenuAccount');

dropdownButtonAccount.addEventListener('click', () => {
  dropdownMenuAccount.style.width = `${dropdownButtonAccount.offsetWidth}px`;
  dropdownMenuAccount.classList.toggle('hidden');
});

dropdownMenuAccount.addEventListener('click', (event) => {
  if (event.target.matches('button[data-value]')) {
    const selectedValue = event.target.getAttribute('data-value');
    dropdownButtonAccount.querySelector('span').textContent = `Show: ${selectedValue}`;
    dropdownMenuAccount.classList.add('hidden');
  }
});

window.addEventListener('click', (event) => {
  if (!dropdownButtonAccount.contains(event.target) && !dropdownMenuAccount.contains(event.target)) {
    dropdownMenuAccount.classList.add('hidden');
  }
});

const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

dropdownMenu.addEventListener('click', (event) => {
  if (event.target.matches('button[data-value]')) {
    const selectedValue = event.target.getAttribute('data-value');
    dropdownButton.querySelector('span span').textContent = selectedValue;
    dropdownMenu.classList.add('hidden');
  }
});

window.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});