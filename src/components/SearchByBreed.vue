<template>
  <div>
    <section class="breedDropDown">
      <select ref="searchCats">
        <option v-for="i in arrCatTypeNames" :key="i">{{ i }}</option>
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
    const searchCats = () => {
      searchByBreed();
    };
    onMounted(() => {
      searchCats;
    });
    return {
      searchCats,
      arrCatTypeNames,
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
