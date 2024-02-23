import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogPosts: [
      {
        blogTitle: "Blog Card 1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 15, 2015",
      },
      {
        blogTitle: "Blog Card 2",
        blogCoverPhoto: "stock-2",
        blogDate: "April 4, 2017",
      },
      {
        blogTitle: "Blog Card 3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 33, 2016",
      },
      {
        blogTitle: "Blog Card 4",
        blogCoverPhoto: "stock-4",
        blogDate: "July 23, 2019",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
