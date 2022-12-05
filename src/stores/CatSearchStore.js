import { defineStore } from "pinia";
import axios from "axios";

export const searchForCatBreed = defineStore("searchForCatBreed", {
  state: () => {
    let arrCatTypeNames = [];
    let catDescription = [];
    let catTemprament = [];
    let catImageForBreed = [];
    let searchUrl = "https://api.thecatapi.com/v1/breeds";

    return {
      arrCatTypeNames,
      searchUrl,
      catDescription,
      catTemprament,
      catImageForBreed,
    };
  },

  actions: {
    async searchByBreed() {
      axios
        .get(this.searchUrl)
        .then((response) => {
          console.log("Search complete!");
          console.log(response);
          for (let i of response.data) {
            if (i.image) {
              this.catImageForBreed.push(i.image.url);
            }
            this.arrCatTypeNames.push(i.name);
            this.catDescription.push(i.description);
            this.catTemprament.push(i.temperament);
          }
        })
        .catch((err) => {
          console.log("Search failed!");
          console.log(err);
        });
    },
  },
  getters: {},
});
