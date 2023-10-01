AOS.init({ duration: 1500 });

const productsInCart: {}[] = [];

const addToCart = function (product: HTMLElement) {
  productsInCart.push(getProductNameAndPrice(product));
  setLocalStorage(productsInCart);
};

const getProductNameAndPrice = function (product: HTMLElement): object {
  return {
    productName: product.querySelector('h3')!.textContent,
    productPrice: product.querySelector('p')!.textContent,
  };
};

const setLocalStorage = (products: {}[]) =>
  window.localStorage.setItem('cart', JSON.stringify(products));
