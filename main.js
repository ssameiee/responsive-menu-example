(function(document) {
  const toggleWidth = document.querySelector('.toggle-width');
  const contanier = document.querySelector('.container');

  const toggleWidthCB = e => {
    if (contanier.classList.contains('full-width')) {
      contanier.classList.remove('full-width');
    } else {
      contanier.classList.add('full-width');
    }
  };

  toggleWidth.addEventListener('click', toggleWidthCB);
})(document);
