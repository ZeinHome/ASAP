(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalFranchBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalFranchBtn: document.querySelector('[data-modal-franchise-close]'),
    modalFranch: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalFranchBtn.addEventListener('click', toggleModal);
  refs.closeModalFranchBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalFranch.classList.toggle('is-hidden');
  }
})();
