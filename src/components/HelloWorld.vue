<template>
  <div>
  <h1>Image gallery</h1>
  <button @click="catImagesData.fetchNewCat">click here to get cat images</button>
  <img :src="catImagesData.catImage" alt="image not found"/>
</div>
</template>

<script>
import { ref } from 'vue'
import { catStore }  from '../stores/TheCatData'
export default{
  setup(){
    let catImagesData = catStore();
  return{
    catImagesData
  }
  },
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
img{
  height: 400px;
  width: 400px;
}
</style>
