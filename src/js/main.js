import { filling } from "./Filling";
import { myfooter } from "./MyFooter";

export const app = {
  el: '#app',
  components: {
    filling,
    myfooter,
    },
  data: {
    state: {
      homepage: true,
      cartInNavigation: false,
      catalog: false,
      targetproduct: false,
      registration: false,
      cartpage: false,
    },
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.text = `Данные не получены! Проверьте правильность адреса сервера! ${error}`
        })
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
          },
        body: JSON.stringify(data)
        }).then(result => result.json())
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
    },
    updateState(page) {
      for (let prop in this.state) {
        this.state[prop] = false
      }
      this.state[page] = true
      document.documentElement.scrollTop = 0
    },
      },
  computed: {},
  mounted() {}
};

