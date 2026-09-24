const dateInputs = document.querySelectorAll('input[type="datetime-local"]')

function updateEmptyState(input) {
  input.classList.toggle("is-empty", !input.value)
}

dateInputs.forEach((input) => {
  updateEmptyState(input)
  input.addEventListener("input", () => updateEmptyState(input))
})

const fileInput = document.querySelector('.file-input input[type="file"]')
const fileName = document.querySelector(".file-input .file-name")

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files

  fileName.textContent = file ? file.name : "Nenhum arquivo selecionado"
  fileInput.closest(".file-input").classList.toggle("has-file", Boolean(file))
})
