<template>
  <div>
    <section >
    <select>
        <option v-for="i in arrCatTypeNames" :key="i" :value="i"> {{ i }} </option>
    </select>
  </section>
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
