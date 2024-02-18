<template>
  <div class="app-wrapper">
    <div class="app">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: "Fira Code", monospace;
  font-optical-sizing: auto;
  font-style: normal;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>
