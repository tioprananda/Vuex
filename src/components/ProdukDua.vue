<template>
  <div class="productdua">
    <ul>
        <!-- UBAHPRODUCT2 MENGEMBALIKAN DATA DARI PRODUCT STATE -->
        <li v-for="item in ubahProducts2" :key="item.id">
        <p>nama : {{item.nama}}</p>
        <p>umur : {{item.umur}}</p></li>
    </ul>
    <!-- <button type="submit" @click="reduce">-umur</button> -->
  </div>
</template>

<script>
export default {
name:`ProdukDua`,
computed : {
    productsVuex : function(){
        return this.$store.state.products;
    },
    ubahProducts2 : function () {
        //MANIPULASI ISI STATE, PRODUCTS
        // LOOPING ISI PRODUCTS 1 1 MASUKAN KEDALAM CONST PRODUCT 
        const product = this.$store.state.products.map((p) => {
            // MAPPING ISI PRODUCT MENJADI P
            // KARNA PRODUCTS ADALAH ARRAY IN OBJECT MAKA KEMBALIKAN DATA PRODUCT BERBENTUK OBJECT
            return {
                // MANIPULASI ISI PRODUCT
                nama : `-- ${p.nama} --`,
                umur : `== ${p.umur} ==`
            }
        })
        // SETELAH FUNCTION PRODUCT DIBUAT, KEMBALIKAN DATA UBAHPRODUCTS2 BERUPA PRODUCT YG BERISI FUNCTION YG TELAH DIBUAT TADI.
        return product;
    }
},
methods : {
    reduce : function () {
        // KETIKA TOMBOL REDUCE DIKLIK, MAKA UMUR BERKURANG 1
        // return this.$store.state.products.forEach((p) => {
        //     return p.umur -= 1;
        // })
    // THIS.$TORE.COMMIT(V-ON CLICK,KEYUP,DLL EVENT) BERFUNGSI MENJALANKAN FUNCTION YANG ADA PADA MUTATION, EVENT BERASAL DARI CHILD DAN FUNCTIONNYA BERADA DI VUEX MUTATION
        this.$store.commit(`reduce`);
    }
}

}
</script>

<style scoped>
.productdua{
    color: blue;
}
</style>