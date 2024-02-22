<template>
  <div class="app-wrapper">
    <div class="app">
      <NavBar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "app",
  components: {
    NavBar,
    Footer
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
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Inria+Sans&family=Roboto+Mono&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: "Inria Sans", sans-serif;
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

.arrow{
  margin-left: 8px;
  width: 12px;
  path{
    fill: #111;
  }
}

.arrow-light {
  path{
    fill: #fff;
  }
}

.blog-card-wrapper{
  position: relative;
  padding: 80px 16px;
  background-color: #FFF;

  @media screen and (min-width: 500px) {
    padding: 100px 16px;
  }
}
</style>
