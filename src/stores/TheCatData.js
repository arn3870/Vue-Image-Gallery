import { defineStore } from "pinia";
import axios from "axios";

export const catStore = defineStore("catStore", {
  state: () => {
    let imagesUrl = "https://api.thecatapi.com/v1/images/search?limit=8";
    return {
      imagesUrl,
      urls: [],
    };
  },

  actions: {
    async fetchNewCat() {
      axios
        .get(this.imagesUrl)
        .then((response) => {
          console.log("Search complete!");
          //   const urls = [];
          for (let i of response.data) {
            const url = i.url;
            this.urls.push(url);
          }
          console.log(response);
          //   this.catImage = urls;
          console.log(this.urls);
        })
        .catch((err) => {
          console.log("Search failed!");
          console.log(err);
        });
    },
  },
  getters: {},
});
