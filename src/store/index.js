import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // STATE SEBAGAI DATA YANG MENAMPUNG SELURUH DATA COMPONENT
  state: {
    products : [
      {nama: `goten`, umur: 26},
      {nama: `trunks`, umur: 22},
      {nama: `vegeta`, umur: 14},
      {nama: `gohan`, umur:55},
      {nama: `goku`, umur:47}
    ],
  },
  // GETTERS SEPERTI COMPUTED, BERFUNGSI SEBAGAI FUNCTION UNTUK MENGUBAH DATA STATE
  getters: {
    // function ubah produk berisi parameter state yang diambil dari state
    ubahProducts : function (state) {
      // looping isi state.products masukan kedalam variabel product
      let product = state.products.map((p) => {
          // ambil isi products 1 1 dan ubah menjadi p
        return {
            // return dan manipulasi isi data product
          nama: `** ${p.nama} **`,
          umur: `++ ${p.umur} ++`
      } 
      });
      // setelah function product dibuat, kembalikan nilai ubah products yang berisi nilai product
      return product;
    },
  },
  // MUTATION SEPERTI METHOOD, FUNCTION UNTUK MENJALANKAN SUATU EVENT, DAN DIPANGGIL DI CHILD
  mutations: {
    reduce : function (state,payload) {
      state.products.forEach((p) => {
        return p.umur += payload;
      })
    }
  },
  // ACTION ADALAH METHODS YANG BERFUNGSI UNTUK TIME ATAU ASYNCHRONUS PADA MUTATION
  actions: {
    reduce : (context,payload) => {
      setTimeout(() => {
        context.commit(`reduce`,payload)
      }, 3000);
    }
  },
  modules: {
  }
})
