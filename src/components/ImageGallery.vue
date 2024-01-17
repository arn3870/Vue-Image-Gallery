<template>
  <div>
    <div class="mainLibrary">
      <h1>Image gallery</h1>
      <hr style="width: 250px; margin-bottom: 30px" />
      <div class="imagesDiv">
        <div v-for="i in urls" class="imgSize" :key="i">
          <img :src="i" alt="image not found" />
        </div>
      </div>
      <button @click="getImages">click to get 10 cat images</button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { catStore } from "../stores/TheCatData";
import { storeToRefs } from "pinia";
export default {
  setup() {
    let catImagesData = catStore();
    const { fetchNewCat } = catImagesData;
    const { urls } = storeToRefs(catImagesData);
    const getImages = () => {
      fetchNewCat();
    };

    return {
      getImages,
      urls,
    };
  },
};
</script>

<style scoped>
button {
  position: relative;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: white;
}

h3 {
  font-size: 1.2rem;
}

.mainLibrary {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-image: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRpbmd8ZW58MHx8MHx8&w=1000&q=80");
  background-attachment: fixed;
  background-position: center;
  margin: -8px -8px -8px -8px; */
}

.imagesDiv {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 10px; */
}
.imgSize {
  height: 300px;
  width: 300px;
  margin: 10px;
}
img {
  height: 300px;
  width: 300px;
}
</style>
