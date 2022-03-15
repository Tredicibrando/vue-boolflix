<template>
  <div id="app">
    <MyHeader />
  </div>
</template>

<script>

import MyHeader from '@/components/MyHeader'

export default {
  name: 'App',
  components:{
    MyHeader,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img{
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
