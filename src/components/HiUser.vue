<template>
  <div class="someClass">
    <h1 class="custom-title">{{ title }}</h1>
    <h3 class="custom-subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "This is a project with Vite and Vue 3.",
  },
});
</script>

<style scoped>
.someClass {
  text-align: center;
  padding: 20px;
}

.custom-title {
  font-weight: bold;
  font-size: 2.6rem;
  color: #2ecc71; 
}

.custom-subtitle {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333; 
}
</style>
