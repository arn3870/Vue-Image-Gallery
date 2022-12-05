<template>
  <div>
    <div class="breedDropDown">
      <select v-model="catForDetails">
        <option v-for="(i, index) in arrCatTypeNames" :key="i" :value="index">{{ i }}</option>
      </select>
      </div>
    <div class="detailsScetion">
      <h2>Cat image</h2>
      <img :src="catImageForBreed[catForDetails]"/>
    <h2> Cat Temprament: </h2>
      <h4>{{ catTemprament[catForDetails] }} </h4>
    <h2> Cat Description: </h2>
      <p> {{ catDescription[catForDetails] }}</p>
  </div>
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
    const { arrCatTypeNames, catDescription, catTemprament, catImageForBreed } = storeToRefs(catSearchData);
    let catForDetails = ref();
    console.log(arrCatTypeNames.value)
    onMounted(() => {
      searchByBreed();
    });
    return {
      arrCatTypeNames,
      catDescription,
      catForDetails,
      catTemprament,
      catImageForBreed
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
.detailsScetion{
  color: rgb(255, 122, 122);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding-right: 300px;
  padding-left: 300px;
}
img{
  width: 500px;
  height: 300px;
}
h2{
  color:rgb(115, 115, 255)
}
</style>
