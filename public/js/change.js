const buttons = document.querySelectorAll('.change_btn')
const sections = document.querySelectorAll('.change__section')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'))
    button.classList.add('active')

    sections.forEach(section => section.classList.remove('active'))
    sections[index].classList.add('active')
  })
})

const initialActiveButton = document.querySelector('.change_btn.active')
if (initialActiveButton) {
  const initialSectionIndex = initialActiveButton.getAttribute('data-section')
  sections.forEach((section, index) => {
    section.classList.toggle('active', index == initialSectionIndex)
  })
}

const buttons_change = document.querySelectorAll('.change_sertificate')
const sections_change = document.querySelectorAll('.change__sec-sertificate')

buttons_change.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons_change.forEach(btn => btn.classList.remove('active'))
    button.classList.add('active')

    sections_change.forEach(section => section.classList.remove('active'))
    sections_change[index].classList.add('active')
  })
})

const initialActiveButton_change = document.querySelector(
  '.change_sertificate.active'
)
if (initialActiveButton_change) {
  const initialSectionIndex =
    initialActiveButton_change.getAttribute('data-section')
  sections_change.forEach((section, index) => {
    section.classList.toggle('active', index == initialSectionIndex)
  })
}

document.querySelectorAll('.checkbox').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const index = this.id.replace('checkbox', '')

    const defaultSVG = document.getElementById('default-svg' + index)
    const checkmarkSVG = document.getElementById('checkmark-svg' + index)
    const container = document.getElementById('checkbox-container' + index)

    if (this.checked) {
      defaultSVG.classList.add('hidden')
      checkmarkSVG.classList.remove('hidden')
      container.classList.add('bg-[#4852F5]', 'border-[#FFFFFF4D]')
    } else {
      defaultSVG.classList.remove('hidden')
      checkmarkSVG.classList.add('hidden')
      container.classList.remove('bg-[#4852F5]', 'border-[#FFFFFF4D]')
    }
  })
})

const start_btnChange = document.querySelectorAll('.start_btnChange');
const start_challengeSec = document.querySelectorAll('.start_challenge-sec');

start_btnChange.forEach((button, index) => {
    button.addEventListener('click', () => {
        start_btnChange.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        start_challengeSec.forEach(section => section.classList.remove('active'));
        start_challengeSec[index].classList.add('active');
    });
});

const initialActiveButton2 = document.querySelector('.start_btnChange.active');
if (initialActiveButton2) {
    const initialSectionIndex = initialActiveButton2.getAttribute('data-section');
    start_challengeSec.forEach((section, index) => {
        section.classList.toggle('active', index == initialSectionIndex);
    });
}