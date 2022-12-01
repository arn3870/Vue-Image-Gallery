import { defineStore } from "pinia";
import axios from "axios";

export const searchForCatBreed = defineStore("searchForCatBreed", {
  state: () => {
    const arrCatTypeNames = [];
    let searchUrl = "https://api.thecatapi.com/v1/breeds";

    return {
      arrCatTypeNames,
      searchUrl,
      breeds: []
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
          this.breeds = response.data;
          console.log((this.breeds.length) + "Breeds from TheCatAPI.com")
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
