<template>
  <BlogPost :post="welcomeScreen" />
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
export default {
  name: "Home",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
    }
  },
};
</script>
