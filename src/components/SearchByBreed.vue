<template>
  <div>
    <section class="breedDropDown">
      <select onchange=selectedBreed>
        <option v-for="i in arrCatTypeNames" :key="i" v-bind="selectedBreed">{{ i }}</option>
      </select>
    </section>
    <!-- <button @click="searchCats">Search</button> -->
  </div>
</template>

<script>
import { searchForCatBreed } from "../stores/catSearchStore.js";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
export default {
  setup() {
    let catSearchData = searchForCatBreed();
    const { searchByBreed } = catSearchData;
    const { arrCatTypeNames } = storeToRefs(catSearchData);
    let selectedBreed = {}
    console.log(window.navigator.userAgent)
    console.log(window.navigator)
    onMounted(() => {
      searchByBreed();
    });
    return {
      arrCatTypeNames,
      selectedBreed
    };
  },
};
</script>

<style>
.breedDropDown {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
