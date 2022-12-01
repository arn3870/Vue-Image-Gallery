import { defineStore } from "pinia";
import axios from "axios";

export const searchForCatBreed = defineStore("searchForCatBreed", {
  state: () => {
    const arrCatTypeNames = [];
    const catDescription = [];
    const catTemprament = [];
    const catImageForBreed = [];
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
          for (let i of response.data) {
            const catTypeNames = i.name;
            // this.catDescription.push(i.weight.description);
            // this.catTemprament.push(i.weight.temperament);
            // this.catImageForBreed.push(i.weight.image.url)
            this.arrCatTypeNames.push(catTypeNames);
          }
          console.log(this.catImageForBreed);
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
