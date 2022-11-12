import { cart } from "./CartComp";
import { products } from "./ProducComp";
import { error } from "./ErrorComp";
import { filter_el } from "./FilterComp";

export const app = {
  el: '#app',
  components: {
        cart,
        products,
        error,
        filter_el,
    },
  data: {
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
        }
  },
  mounted() { }
};

