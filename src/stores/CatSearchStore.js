import { defineStore } from "pinia";
import axios from "axios";

export const searchForCatBreed = defineStore("searchForCatBreed", {
  state: () => {
    const arrCatTypeNames = [];
    let searchUrl = "https://api.thecatapi.com/v1/breeds";

    return {
      arrCatTypeNames,
      searchUrl,
    };
  },

  actions: {
    async searchByBreed() {
      axios
        .get(this.searchUrl)
        .then((response) => {
          console.log("Search complete!");
          for (let i of response.data) {
            const catTypeNames = i.name;
            this.arrCatTypeNames.push(catTypeNames);
          }
          console.log(response);
          //   this.catImage = urls;
          console.log(this.arrCatTypeNames);
        })
        .catch((err) => {
          console.log("Search failed!");
          console.log(err);
        });
    },
  },
  getters: {},
});
