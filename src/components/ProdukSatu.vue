<template>
  <div class="produksatu">
    <ul>
        <!-- UBAHPRODUCTS BERISI FUNCTION YANG MENGEMBALIKAN DATA -->
        <li v-for="item in ubahProducts" :key="item.id">
        <p>nama : {{item.nama}}</p>
        <p>umur : {{item.umur}}</p>
        </li>
    </ul>
    <button type="submit" @click="reduce(2)">reduce time</button>
  </div>
</template>
<script>

export default {
name:`ProdukSatu`,
computed: {
    productsVuex : function (){
        // KEMBALIKAN DATA DARI STORE, STATE, PRODUCTS
        return this.$store.state.products;
    },
    ubahProducts () {
        // KEMBALIKAN DATA DARI STORE, GETTERS, UBAHPRODUCTS
        return this.$store.getters.ubahProducts;
    }
},
methods :{
    reduce : function (amount) {
        // this.$store.dispatch(reduce adalah nama event di vue) berfungsi memanggil method yang ada pada vuex action
        this.$store.dispatch(`reduce`,amount)
    }
}
}
</script>

<style scoped>

    .produksatu {
        color: red;
    }

</style>