<template>
  <div class="mainDIv">
    <section class="welcomeDiv">
      <h1>Welcome to Cat Gallery</h1>
      <br />
    </section>
    <loader v-if="loading" />

  </div>
</template>

<script>
import TheWelcome from "./TheWelcome.vue";
export default {
  setup() {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: {
    TheWelcome
  },
};
</script>

<style scoped>
#app{
  font-family: monospace;
}
h1{
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
