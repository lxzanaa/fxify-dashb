const buttons = document.querySelectorAll('.change_btn');
const sections = document.querySelectorAll('.change__section');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        sections.forEach(section => section.classList.remove('active'));
        sections[index].classList.add('active');
    });
});

const initialActiveButton = document.querySelector('.change_btn.active');
if (initialActiveButton) {
    const initialSectionIndex = initialActiveButton.getAttribute('data-section');
    sections.forEach((section, index) => {
        section.classList.toggle('active', index == initialSectionIndex);
    });
}
document.querySelectorAll('.checkbox').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const index = this.id.replace('checkbox', '');

        const defaultSVG = document.getElementById('default-svg' + index);
        const checkmarkSVG = document.getElementById('checkmark-svg' + index);
        const container = document.getElementById('checkbox-container' + index);

        if (this.checked) {
            defaultSVG.classList.add('hidden');
            checkmarkSVG.classList.remove('hidden');
            container.classList.add('bg-[#4852F5]', 'border-[#FFFFFF4D]');
        } else {
            defaultSVG.classList.remove('hidden');
            checkmarkSVG.classList.add('hidden');
            container.classList.remove('bg-[#4852F5]', 'border-[#FFFFFF4D]');
        }
    });
});