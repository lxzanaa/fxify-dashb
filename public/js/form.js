function isNumberKey (event) {
  const charCode = event.which ? event.which : event.keyCode
  if (charCode < 48 || charCode > 57) {
    event.preventDefault()
    return false
  }
  return true
}

function formatCardNumber (event) {
  const input = event.target
  const cursorPosition = input.selectionStart
  let value = input.value.replace(/\s+/g, '')

  if (value.length > 16) {
    value = value.slice(0, 16)
  }

  const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ')

  const spacesBefore = (input.value.slice(0, cursorPosition).match(/\s/g) || [])
    .length
  const spacesAfter = (
    formattedValue.slice(0, cursorPosition).match(/\s/g) || []
  ).length
  const adjustment = spacesAfter - spacesBefore

  input.value = formattedValue
  input.selectionStart = input.selectionEnd = cursorPosition + adjustment
}

function formatExpirationDate (event) {
  const input = event.target
  const cursorPosition = input.selectionStart
  let value = input.value.replace(/\D+/g, '')

  if (value.length > 4) {
    value = value.slice(0, 4)
  }
  const formattedValue = value.replace(/^(\d{2})(\d+)/, '$1/$2')

  const slashesBefore = (
    input.value.slice(0, cursorPosition).match(/\//g) || []
  ).length
  const slashesAfter = (
    formattedValue.slice(0, cursorPosition).match(/\//g) || []
  ).length
  const adjustment = slashesAfter - slashesBefore

  input.value = formattedValue
  input.selectionStart = input.selectionEnd = cursorPosition + adjustment
}

function isNumberKey (event) {
  const charCode = event.which ? event.which : event.keyCode
  if (charCode < 48 || charCode > 57) {
    event.preventDefault()
    return false
  }
  return true
}

function formatCCV (event) {
  const input = event.target
  let value = input.value.replace(/\D+/g, '')

  if (value.length > 3) {
    value = value.slice(0, 3)
  }

  input.value = value
}