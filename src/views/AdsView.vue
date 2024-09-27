<template>
  <div class="ads">
    <div class="fav-buttons-div">
      <button v-if="!showFav" @click="showCart" class="fav-botton">
        Shopping cart
      </button>
    </div>
  </div>
  <div class="container" v-if="showFav">
    <div v-for="ad in getFavs" :key="ad.id">
      <BookData :ad="ad" @delete-ad="removeBook" />
    </div>
  </div>
  <div class="container" v-else>
    <div v-for="ad in allAds" :key="ad.id">
      <BookData :ad="ad" @delete-ad="removeBook" />
    </div>
  </div>
</template>

<script>
import BookData from "../components/BookData.vue";

import { mapState, mapActions } from "pinia";
import { useAdStore } from "../stores/Book.js";

export default {
  components: {BookData},
  data() {
    return {
      showFav: false,
      creatingNew: false,
    };
  },
  computed: {
    ...mapState(useAdStore, ["allAds"]),
    getFavs() {
      return this.allAds.filter((ad) => ad.fav);
    },
  },
  methods: {
    showCart() {
      this.showFav = !this.showFav;
    },
    removeBook() {
      console.log("Item removed!");
    },
  },
};
</script>

<style>
@import url('../assets/view.css');
</style>
