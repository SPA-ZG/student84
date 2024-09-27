<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <span class="nav">
      <RouterLink to="/" class="btn-navigate">Home</RouterLink>
      <RouterLink to="/books" class="btn-navigate">Shop</RouterLink>
    </span>
  </header>
  <RouterView></RouterView>
</template>

<style>
@import url('./assets/home.css');
</style>
