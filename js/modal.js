const openModalButtons = document.querySelectorAll ('[data-modal-target]')
const closeModalButtons = document.querySelectorAll ('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.modal-active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal-active')
  overlay.classList.add('modal-active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal-active')
  overlay.classList.remove('modal-active')
}
