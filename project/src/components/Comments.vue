<template>
  <div>
     <h4>User Comments</h4>
    
    <div v-if="token" class="comments">
      <b-form-input
        v-model="comment"
        placeholder="Say something..."
        @keydown.enter="onSubmit"
      ></b-form-input>

      <b-card v-for="comment in blog.comments" :title="comment.name" :key="comment.id">
        <b-card-text>
          {{ comment.body }}
        </b-card-text>
      </b-card>
    </div>
    <p v-else>You must be signed in to leave a comment</p>
  </div>
</template>

<script>

  import {  mapState } from 'vuex';

  export default {
    name: 'Comments',

    props: {
      blog: Object
    },

    data() {
      return {
        comment: ''
      }
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    methods: {
      onSubmit() {
        this.$socket.emit('comment', {body: this.comment, blogId: this.blog.id, token: this.token });
        this.comment = '';
      }
      
    }
  }

</script>

<style scoped>
  .card {
    margin-top: 10px;
    text-align: left;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-body {
    padding-bottom: 5px;
  }
  .comments{
   
   text-align: center;
   width: 60%;
   margin-left: 20%;
  }
</style>