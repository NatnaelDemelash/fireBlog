<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
           <BlogCard v-for="(post, index) in sampleBlogPosts" :key="index" :post="post"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
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
      sampleBlogPosts: [
        {blogTitle: "Blog Card 1", blogCoverPhoto: "stock-1", blogDate:"May 15, 2015"},
        {blogTitle: "Blog Card 2", blogCoverPhoto: "stock-2", blogDate:"April 4, 2017"},
        {blogTitle: "Blog Card 3", blogCoverPhoto: "stock-3", blogDate:"May 33, 2016"},
        {blogTitle: "Blog Card 4", blogCoverPhoto: "stock-4", blogDate:"July 23, 2019"},
      ]
    }
  },
};
</script>


<style lang="scss" scoped>
.blog-card-wrapper {
  h3{
    margin-bottom: 32px;
    font-size: 28px;
    font-weight: 300;
  }

  .blog-cards{
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
