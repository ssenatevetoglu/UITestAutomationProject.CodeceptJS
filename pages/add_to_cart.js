const { product } = require("puppeteer");

const { I } = inject();

module.exports = {
    productName: '#p-294072962 > div.pro > a > h3',
    items: '.items',

    buttons: {
        searchButton: '.searchBtn',
        addToCartButton: '.icon-white-basket',
        myCart: '.myBasket',
        removeCart: 'span[title="Sil"]',
    },

    fields: {
        search: '#searchData',
    },

    fillSearchProduct(product) {
        I.wait(8);
        I.click(this.fields.search);
        I.fillField(this.fields.search, product);
    },

    clickSearchButton() {
        I.wait(4);
        I.click(this.buttons.searchButton);
    },

    clickProductDetail() {
        I.wait(5);
        I.click(this.productName);
    },

    clickAddToCart() {
        I.wait(5);
        I.click(this.buttons.addToCartButton);
    },

    clickCart() {
        I.wait(5);
        I.click(this.buttons.myCart);
    },

    removeCart() {
        I.wait(5);
        I.click(this.buttons.removeCart);
    }
}