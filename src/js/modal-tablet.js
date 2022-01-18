(() => {
  const refs = {
    openModalTabletBtn: document.querySelector('[data-modal-tablet-open]'),
    modalTablet: document.querySelector('[data-tablet-modal]'),
  };

  refs.openModalTabletBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalTablet.classList.toggle('is-hidden');
  }
})();
