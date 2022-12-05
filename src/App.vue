<template>
  <div id="app">
   <!-- TIDAK PERLU MENGINISIALISASI PROP DI COMPONENT KARNA DATA DIAMBIL LANGSUNG DARI STORE -->
    <ProdukSatu/>
    <ProdukDua/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProdukSatu from './components/ProdukSatu.vue'
import ProdukDua from './components/ProdukDua.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    ProdukSatu,
    ProdukDua
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
#app {
 
}
</style>
