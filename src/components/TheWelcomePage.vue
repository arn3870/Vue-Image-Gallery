<template>
  <div class="mainDIv">
    <div v-if="loading" class="welcomeDiv">
      <h1>The Cat Gallery</h1>
    </div>
    <hello-world v-if="!loading"></hello-world>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import TheWelcome from "./TheWelcome.vue";
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    TheWelcome,
    HelloWorld,
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
  background-color: rgb(2, 25, 73);
  width: 350px;
  height: 350px;
}
h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 50px;
}
</style>
