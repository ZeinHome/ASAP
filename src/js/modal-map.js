(() => {
  const refs = {
    openModalMapBtn: document.querySelector('[data-modal-map-open]'),
    closeModalMapBtn: document.querySelector('[data-modal-map-close]'),
    modalMap: document.querySelector('[data-map-modal]'),
  };

  refs.openModalMapBtn.addEventListener('click', toggleModal);
  refs.closeModalMapBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalMap.classList.toggle('is-hidden');
  }
})();
