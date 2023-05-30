<template>
  <h1>Hello Welcome JCI</h1>
  <ExampleComp1 />
  <hr>
  <ExampleComp2 />
  <hr>
</template>

<script>
import ExampleComp1 from './components/VuexDemo/ExampleComp1.vue'
import ExampleComp2 from './components/VuexDemo/ExampleComp2.vue'

export default {
  name: 'App',
  components: {
    ExampleComp1,
    ExampleComp2
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  background-color: chartreuse;
}
</style>
