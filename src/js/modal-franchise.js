(() => {
  const refs = {
    openModalFranchBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalFranchBtn: document.querySelector('[data-modal-franchise-close]'),
    modalFranch: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalFranchBtn.addEventListener('click', toggleModal);
  refs.closeModalFranchBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalFranch.classList.toggle('is-hidden');
  }
})();
