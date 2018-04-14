<template>
  <div id="app" >

    <router-view></router-view>
     <foot v-if="show"></foot>
    
  </div>
</template>

<script>
 import foot from './components/foot/foot.vue';
export default {
    components: {
      'foot': foot
    },
    data() {
      return {
        show: true
      }
    },
    watch: {
      '$route' () {
        console.log(this.$route.name)

        this.show = this.$route.name !== 'login'
      }
    },
    created() {
          if(this.$route.name == 'login'){
            this.show = false
          }
          
    },
  name: 'App'
}
</script>

<style lang="less">
 
</style>
