<template>
  <div id="app">
    
   <div>
  <b-navbar toggleable="lg" type="dark " variant="success">
    <b-navbar-brand to="/">EzFinance</b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
<b-nav-item-dropdown text="Blog categories">
         <b-dropdown-item
                v-for="cat in categories"
                :key="cat"
                :to="`/category/${cat}`">
                {{ cat }}
              </b-dropdown-item>
              </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
            <b-navbar-nav class="ml-auto">
             <b-dropdown-item v-if="!this.token" to="/register">Register</b-dropdown-item>
            <b-dropdown-item v-if="!this.token" to="/login">Log In</b-dropdown-item>
             <b-dropdown-item v-else @click="logout()">Log Out</b-dropdown-item>
              <b-dropdown-item v-if="this.token" to="/Profile">Profile</b-dropdown-item>  

           
          </b-navbar-nav>
        
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
 <router-view />
  </div>
</template>

<script>

  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {

          date: new Date(),
      }
      
    },

    computed: {
      ...mapState([
        'categories',
        'token',
        'blogs'
      ])
    },

    mounted() {
      this.fetchCategories();

       if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {
      ...mapActions([
        'fetchCategories',
        
      ]),
       ...mapMutations([
        'removeToken',
        'setToken'
      ]),
       logout() {
        this.removeToken();
      }

      // search(e) {
      //   e.preventDefault();

      //   const sq = this.searchQuery;
      //   this.searchQuery = '';
        
      //   this.$router.push({ name: 'Search', query: { q: sq } });
      // }
    },
      sockets: {
      error(err) {
        alert(err);
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
