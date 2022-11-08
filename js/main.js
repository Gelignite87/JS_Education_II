const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log('I am here! ', error);
          this.$refs.error.text = 'Данные не получены! Проверьте правильность адреса сервера!'
        })
    },
  },
  mounted() { }
});

