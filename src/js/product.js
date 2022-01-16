(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-product-open]'),
    closeProductBtn: document.querySelector('[data-product-close]'),
    product: document.querySelector('[data-product]'),
  };

  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.product.classList.toggle('is-hidden');
  }
})();