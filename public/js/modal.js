const modalOverlay = document.getElementById('modalOverlay');
const deleteCardModal = document.getElementById('deleteCardModal');
const modalOpenButtons = document.querySelectorAll('#modalOpenButtonDel');
const modalCloseButton = document.getElementById('modalCloseBtn');
const body = document.body;

const openModal = () => {
    modalOverlay.classList.remove('hidden');
    deleteCardModal.classList.remove('hidden');
    body.classList.add('h-screen', 'overflow-hidden');
};

const closeModal = () => {
    modalOverlay.classList.add('hidden');
    deleteCardModal.classList.add('hidden');
    body.classList.remove('h-screen', 'overflow-hidden');
};

modalOpenButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

modalCloseButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);
