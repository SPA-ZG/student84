<template>
  <div :class="{ fav: ad.fav }" class="one-ad">
    <img :src="ad.image" class="imageClass" />
    <h2>{{ ad.title }}</h2>
    <h3>Author: {{ ad.author }}</h3>
    <h3>Pages: {{ ad.pages }}</h3>
    <h3>Price: {{ ad.price }} $</h3>
    <div class="fav-and-button">
      <i class="fa fa-shopping-basket shopping-basket" @click="setToFav(ad)">Add to cart</i>
      <button class="fav-botton" @click="removeBook_local(ad.id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAdStore } from "../stores/Book.js";

export default {
  props: ["ad"],
  methods: {
    ...mapActions(useAdStore, ["removeBook", "setToFav"]),
    removeBook_local(id) {
      this.removeBook(id);
      this.$emit("removeBook");
    },
  },
};
</script>

<style scoped>
 @import url('../assets/items.css');
</style>
