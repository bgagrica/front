<template>
  <div class="strategies">
      <br>
      <p>Create new plan!</p>
      <br>
       <b-form-input
        v-model="name"
        placeholder="Name your plan..."
        @keydown.enter="onSubmit"
      ></b-form-input>
      <b-form-input
        v-model="body"
        placeholder="Write your plan..."
        @keydown.enter="onSubmit"
      ></b-form-input>

      <br>

  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'CreateStrategy',
    
    //name body 

   data() {
      return {
        fields: ['name', 'rating', 'category'],
        perPage: 2,
        currentPage: 1,
        name: null,
        body: null,
              }
    },
    watch: {
      
    },
       mounted() {
          
    },

  
   computed: {
     
    },
     methods: {
         ...mapActions([
        'createStrategy'
      ]),

        onSubmit() {
        const strategy = {name: this.name, body: this.body}
        this.name =""
        this.body =""

        this.createStrategy(strategy)
      }

    }
 
  }

</script>

<style scoped>
.strategies{
     width: 60%;
     margin-left: 20%;
 }
</style>