<template>
  <div class="app-wrapper">
    <div class="app">
      <NavBar v-if="!navigation"/>
      <router-view />
    </div>
    <Footer v-if="!navigation"/>
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
    return {
      navigation: null 
    };
  },
  created() {
    this.checkRoute();
  },
  mounted() {
  },
  methods: {
    checkRoute() {
      if(this.$route.name == "Login" || this.$route.name == "Register" || this.$route.name == "ForgotPassword"){
        this.navigation = true;
        return;
      } else{
        this.navigation = false;
        return;
      }
    }
  },
  watch: {
    $route(){
      this.checkRoute();
    }
  },
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

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #2b4cae;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>
