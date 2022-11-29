<template>
  <div class="mainDIv">
    <loader v-if="loading">
      <section class="welcomeDiv">
        <h1>Welcome to Cat Gallery</h1>
        <br />
      </section>
    </loader>
    <div v-else><hello-world></hello-world></div>
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
.mainDiv {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 40px;
}
.welcomeDiv {
  padding: 45px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width: 350px;
  height: 350px;
}
h1 {
  display: block;
  position: flex;
  color: rgb(20, 121, 60);
  /* margin:auto; */
  text-align: center;
  font-size: 50px;
}
</style>
