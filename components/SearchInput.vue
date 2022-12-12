<script setup>
  let searchTerm = ref('Search')
</script>

<template>
  <section class="search-input">
    <input type="text" v-model="searchTerm">
  </section>
</template>

<style scoped>
  .search-input {
    background: var(--color-athensgray);
    border-radius: .8rem;
    position: relative;
  }
  .search-input::before {
      content: '⌕';
      position: absolute;
      top: 2.5rem;
      left: 2.5rem;
      color: var(--color-manatee);
      transform: scale(3) scaleX(-1);
    }
    input {
      display: flex;
      width: 100%;
      height: 4.8rem;
      background-color: transparent;
      font: var(--font-small-light);
      color: var(--color-manatee);
      padding: 3.2rem;
    }
    @media (min-width: 640px) {
      input {
        padding: 3.2rem;
        padding-left: 4.2rem;
        max-height: 4.8rem;
      }
    }
</style>