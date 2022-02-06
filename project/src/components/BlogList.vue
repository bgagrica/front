<template>
  <div >


    {{this.blogsIdToShow.length}}
    <b-table
      id="my-table"
      hover
      fixed
      :items="items"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage" 
       @row-clicked="rowClicked"
    >
    </b-table>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    
  </div>
</template>

<script>
import { mapState,mapActions} from 'vuex';

  export default {
    name: 'BlogList',
    


   data() {
      return {
        fields: ['name',  'category'],
        perPage: 6,
        currentPage: 1,
        items:[] 
              }
    },
    watch: {
      // currentPage() {
        
      //    this.blogsIdToShow.slice((this.currentPage-1) * this.perPage, ((this.currentPage ) * this.perPage)-1).map( id => {
      //      this.getBlog(id).then( obj => this.items.push(obj) );
      //    });
      // },

      blogsIdToShow(nVal) {
        this.currentPage = 1;
        this.items = [];
        console.log(this.items +"items")
        nVal.map( id => {
           console.log(id)
          this.getBlog(id).then( obj => this.items.push(obj) );
        });
      }
    },

    mounted() {
      this.items = [];
      
      this.blogsIdToShow.map( id => {
        this.getBlog(id).then( obj => this.items.push(obj) );
      });
    },

  
    
    computed: {
      ...mapState([
        'blogsIdToShow'
      ]),
      rows() {
        return this.blogsIdToShow.length
      }
    },
     methods: {
      ...mapActions([
        'getBlog'
      ]),
      rowClicked(record) {
        this.$router.push({ name: 'Single', params: { id: record.id } });
      }
    }
 
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }

  .table {
    width: 80%;
    margin-left: 10%;
  }
</style>