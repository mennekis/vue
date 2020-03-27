var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello World! It is my first site on VUE'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })
  