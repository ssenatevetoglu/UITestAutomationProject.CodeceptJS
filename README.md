Çalıştırmadan önce codecept.conf.js dosyası içindeki aşağıdaki satırlara email ve şifre bilgisini girilmelidir.

"login: (I) => I.login('xxx.gmail.com', 'SetYourPassword'),"
"check: (I) => I.amSignedIn('User Name')"

Terminalden Otomasyonu Çalıştırmak için: "npx codeceptjs run" komutunu kullanınız.

nodejs version v12.16.1 kurulmalıdır.

Her hakkı saklıdır ©Sena Tevetoğlu 2021