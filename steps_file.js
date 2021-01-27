module.exports = function () {
  return actor({

    login(email, password) {

      this.amOnPage('/');
      this.fillField('#email', email);
      this.fillField('#password', password);
      this.click('#loginButton');
    },
    
    amSignedIn(username) {
      this.amOnPage('/');
      this.see(username, '.myAccount');
    }
  });
}