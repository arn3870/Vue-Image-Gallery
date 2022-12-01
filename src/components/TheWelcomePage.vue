<template>
  <div class="mainDIv">
    <div v-if="loading" class="welcomeDiv">
      <h1>The Cat Gallery</h1>
    </div>
    <div>
      <image-gallery v-if="!loading"></image-gallery>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import ImageGallery from "./ImageGallery.vue";
import SearchByBreed from "./SearchByBreed.vue";
export default {
  components: {
    ImageGallery,
    SearchByBreed,
  },
  setup() {
    let loading = ref(true);

    return {
      loading,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style scoped>
#app {
  font-family: monospace;
}
h1 {
  font-family: monospace;
}

.welcomeDiv {
  padding: 45px;
  border-radius: 20px;
  margin: auto;
  width: 350px;
  /* height: 350px; */
  background-image: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRpbmd8ZW58MHx8MHx8&w=1000&q=80");
  background-attachment: fixed;
  background-position: center;
}
.mainDiv {
}
h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 50px;
}
</style>
