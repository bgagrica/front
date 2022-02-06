<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <BlogList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import BlogList from '@/components/BlogList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Category',
    
    components: {
      Header,
      BlogList,
    },

    data() {
        return {
            subtitle: '',
            catName: null
        }
    },

    watch: {
      $route() {
        this.subtitle = this.$route.params.name;
          this.catName =  this.$route.params.name;
        this.fetchByCategory(this.catName);
      }
    },

    mounted() {
        this.subtitle = this.$route.params.name;
        this.catName =  this.$route.params.name;
        this.fetchByCategory(this.catName);
    },

    methods: {
      ...mapActions([
        'fetchByCategory'
      ])
    }
  }
</script>

<style scoped>

</style>
