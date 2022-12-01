<template>
  <div>
    <select v-for="i in arrCatTypeNames" :key="i" >
        <option :value="i"> {{ i }}</option>
    </select>
    <button @click="searchCats">Search</button>
  </div>
</template>

<script>
import { searchForCatBreed } from "../stores/catSearchStore.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    let catSearchData = searchForCatBreed();
    const { searchByBreed } = catSearchData;
    const { arrCatTypeNames } = storeToRefs(catSearchData);
    const searchCats = () => {
    searchByBreed();
    };
    return {
      searchCats,
      arrCatTypeNames
    };
  },
};
</script>
