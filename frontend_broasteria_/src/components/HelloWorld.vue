<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">Broasteria</h1>
    <h3>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Pollos Angy</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener"></a>. Sistema De Venta
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 7.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
