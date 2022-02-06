<template>
  <div id="app">
    <Header subtitle="Blogs"/>
    <BlogList />

  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import BlogList from '@/components/BlogList.vue'
  import { mapActions } from 'vuex'
  

  export default {
    name: 'Blogs',
    
    components: {
    Header,
    BlogList
    },
     mounted() {
       
        this.fetchBlogs()
    },
     methods:{
        ...mapActions([
        'fetchBlogs'
      ]),
    },

   
  }
</script>
