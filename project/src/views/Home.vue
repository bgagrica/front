<template>
  <div id="app">
    <Header subtitle="Home"/>
    <img
      src="https://c.pxhere.com/images/b0/d5/7b6d8a2e61c173ea68873abffb13-1637578.jpg!d"
      width="400"
      alt="Logo"
    />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    
    components: {
      Header
    }
  }
</script>
