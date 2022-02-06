<template>
  <div>

    <div class="art">
    {{blog.id}}
      <ul>
        <li>Name: {{ blog.name }}</li>
        <li>Category: {{ blog.category }}</li>
        <li>Rating: {{ blog.rating }}</li>
      </ul>
    
      <p>Blog text: <br>{{blog.body}}</p>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'SingleBlog',

    props: {
     blog: Object,
    }
    
  }

</script>

<style scoped>

 

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
    width: 70%;
    margin-left: 15%;
  }

 ul {
  list-style: none;
  
}


</style>