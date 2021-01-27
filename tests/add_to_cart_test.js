const product = "Antep Fıstığı 1 KG";
Feature('AddToCart');

Before(login => login('user'));

Scenario('Search, Add cart, delete from cart for product', (I, addToCartPage) => {
   addToCartPage.fillSearchProduct(product);
   addToCartPage.clickSearchButton();
   addToCartPage.clickProductDetail();
   addToCartPage.clickAddToCart();
   I.see('Ürün sepetinize eklendi', addToCartPage.items);
   addToCartPage.clickCart();
   addToCartPage.removeCart();
   I.see('Sepetiniz Boş');
}).tag('@searchAddcartDeleteProduct');