<template>
  <div>
    <Header :subtitle="subtitle"/>
    <SingleBlog v-if="blog" :blog="blog"/>
    <Comments v-if="blog" :blog="blog"/>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import SingleBlog from '@/components/SingleBlog.vue';
  import Comments from '@/components/Comments.vue';
  import { mapActions } from 'vuex';


  export default {
    name: 'Single',

    components: {
    Header,
    SingleBlog,
    Comments
},

    data() {
      return {
        image: null,
        subtitle: '',
        blog: null,
      }
    },
    
    methods: {
      ...mapActions([
        'getBlog'
      ])
    },

    mounted() {
      this.getBlog(this.$route.params.id).then( res => {
        this.blog = res;
        this.subtitle = this.blog.name;
      });
    }
  }

</script>