<template>
  <div  v-if="this.token">
   
    <Header subtitle="My profile"/>
    <StrategyList/>
    <CreateStrategy />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import StrategyList from '@/components/StrategyList.vue'
  import CreateStrategy from '@/components/CreateStrategy.vue'
  import { mapActions,mapState} from 'vuex';


  

  export default {
    name: 'Profile',
    
    components: {
    Header,
    StrategyList,
    CreateStrategy
},
     mounted() {
       this.fetchStrategies()
    },
      computed: {
      ...mapState([
        'token',
      ])
    },
     methods:{
        
        ...mapActions([
        'fetchStrategies'
      ])
    },

   
  }
</script>
