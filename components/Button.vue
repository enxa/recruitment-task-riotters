<script setup>
  const { className } = defineProps(['className'])

  const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')" :class="className">
    <slot />
  </button>
</template>

<style scoped>
  button {
    border: 1px solid var(--color-whisper);
    border-radius: .4rem;
    padding: .8rem 1.6rem;
    margin: .5rem 0;
    font: var(--font-semismall-semibold);
    color: var(--color-electricviolet);
    background: var(--color-white);
    cursor: pointer;
  }
    button.alter {
      color: var(--color-white);
      background: var(--color-electricviolet);
    }
</style>

