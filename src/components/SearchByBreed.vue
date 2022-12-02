<template>
  <div>
    <section class="breedDropDown">
      <select>
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
    onMounted(() => {
      searchByBreed();
    });
    return {
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
