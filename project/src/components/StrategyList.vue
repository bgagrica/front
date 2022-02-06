<template>
  <div class="strategies">
        <b-list-group  >
        <b-list-group-item  v-for="strategy in strategies" :title="strategy.name" :key="strategy.id" active class="flex-column align-items-start bg-success">
            <div class="d-flex  w-100 justify-content-between  " >
            <h5 class="mb-1 ">{{strategy.name}}</h5>
            
          
            </div>

            <p class="mb-1 ">
                {{strategy.body}}
            </p>

            
        </b-list-group-item>
        </b-list-group>
  </div>
</template>

<script>
  import {  mapState } from 'vuex';

  export default {
    name: 'StrategyList',
    


   data() {
      return {
        fields: ['name', 'rating', 'category'],
        perPage: 2,
        currentPage: 1,
        strategies:[] ,
      
              }
    },
     watch: {
     
      userStrategies(nVal) {
       
        this.strategies = nVal
      }
    },
       mounted() {
           this.strategies = this.userStrategies
    },

  
    
    computed: {
         ...mapState([
        'userStrategies'
      ])
    
    },
     methods: {
   
    }
 
  }

</script>

<style scoped>
 .strategies{
     width: 60%;
     margin-left: 20%;
 }
 b-list-group-item {
     outline: 0;
 }

</style>