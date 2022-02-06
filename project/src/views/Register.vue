<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form @submit="onSubmit">
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="User Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

       <b-form-group label="Nickname:" label-for="nickname">
        <b-form-input id="nickname" v-model="form.nickname" placeholder="Enter nickname" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
       <b-form-radio v-model="form.role" :aria-describedby="ariaDescribedby" name="some-radios" value="user">User</b-form-radio>
       <b-form-radio v-model="form.role" :aria-describedby="ariaDescribedby" name="some-radios" value="moderator">Moderator</b-form-radio>
       <b-form-radio v-model="form.role" :aria-describedby="ariaDescribedby" name="some-radios" value="admin">Admin</b-form-radio>
     </b-form-group>

    <div class="mt-3">Selected: <strong>{{ form.role }}</strong></div>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
            name: '',
            email: '',
            nickname:'',
            password: '',
            role: '',
        }
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();
        if(this.form.role== '')
            alert("fullfill all")
        else{
                  this.register(this.form);
        this.$router.push({ name: 'Home' });
        }
  
      }
    }
  }
</script>

<style scoped>

</style>
