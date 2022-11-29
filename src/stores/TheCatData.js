import { defineStore } from "pinia";
import axios from 'axios'

export const catStore = defineStore("catStore", {
  state: () => {
    let imagesUrl = 'https://api.thecatapi.com/v1/images/search';
    let catImage = null;

    return {
      imagesUrl,
      catImage
    };
  },

  actions: {
    fetchNewCat() {
      axios
        .get(this.imagesUrl)
        .then((response) => {
          console.log("Search complete!");
          console.log(response);
          this.catImage = response.data[0].url;
          console.log(this.catImage);
        })
        .catch((err) => {
          console.log("Search failed!");
          console.log(err);
        });
    },
  },

  getters: {},
});
