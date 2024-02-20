<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h3 v-if="post.welcomeScreen">{{ post.title }}</h3>
        <p v-if="post.welcomeScreen" class="content-preview"> {{ post.blogPost }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" to="#">
          Login/Register <Arrow class="arrow arrow-light"/>
        </router-link>
        <router-link v-else class="link link-light" to="#">
          View Post <Arrow class="arrow"/>
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
        <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
  export default {
    props: ['post'],
    components:{
      Arrow
    }
    
  }
</script>

<style lang="scss" scoped>

.blog-wrapper {
  display: flex;
 flex-direction: column;
  @media screen and (min-width: 700px) {
    min-width: 650px;
    min-height: 650px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    flex-direction: row;
  }

  .blog-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media screen and (min-width: 700px) {
      order: 1  
    }
    @media screen and (min-width: 800px) {
      flex: 3;
    }

   div{
    max-width: 375px;
    padding: 72px 24px;

    @media screen and (min-width: 700px) {
      padding: 0 24px;
    }

    h3{
      font-size: 32px;
      font-weight: 300;
      text-transform: uppercase;
      @media screen and (min-width: 700px) {
        font-size: 40px;
      }
    }

    p{
      font-size: 15px;
      font-weight: 300;
      line-height: 1.7;
    }

    .content-preview{
      font-size: 13px;
      max-height: 24px;
      width: 260px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .link{
      display: inline-flex;
      align-items: center;
      margin-top: 32px;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      transition: .5s ease;
    }
  } 
  }

  .blog-photo{
    order: 1;
    flex: 3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (min-width: 700px) {
      order: 2;
    }
    
    @media screen and (min-width: 800px) {
      flex: 4;
    }

    img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.blog-content{
    background-color: #333;
    color: #fff;
}

</style>
