import { flexgrow } from "./FlexGrow";
import { myfooter } from "./Footer";

export const app = {
  el: '#app',
  components: {
    flexgrow,
    myfooter,
    },
  data: {
    state: {
      homepage: true,
      catalog: false,
      product: false,
      registration: false,
      cartpage: false,
    },
    defaultImg: 'https://via.placeholder.com/250x250',
    userSearch: '',
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
    getImage(img) {
            if (img) {return img}
            return this.defaultImg
    },
    updateState(page) {
      for (let prop in this.state) {
        this.state[prop] = false
      }
      this.state[page] = true
      document.documentElement.scrollTop = 0
    },
    closeDiv(div) {
      const block = document.querySelector(div)
      document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(block);
        if (!withinBoundaries) {
          this.$refs.fg.$refs.ng.$refs.cart.showCart = false;
        }
      })
    }
  },
  mounted() { }
};

