<script setup>
  const { change, size } = defineProps(['change', 'size'])
</script>

<template>
  <span class="arrow"
    :class="change"
    :style="{ width: size, height: size }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xml:space="preserve" 
      viewBox="0 0 10 10"
      stroke-miterlimit="1" 
      stroke-linecap="round" 
    >
      <path v-if="change.includes('up')" d="m2 8 6-6m0 6V2H2"/>
      <path v-if="change.includes('down')" d="m2 2 6 6M2 8h6V2"/>
    </svg>
  </span>
</template>

<style scoped>
  .arrow {
    display: grid;
    place-items: center;
    border: 1px solid;
    border-radius: 1rem;
    padding: 0.25rem;
    width: 1rem;
    height: 1rem;
    margin: .5rem 0;
  }
    .arrow path {
      fill: transparent;
    }
  .arrow.up {
    color: var(--color-shamrock);
    border-color: var(--color-shamrock);
    background-color: var(--color-applegreen);
  }
    .arrow.up path {
      stroke: var(--color-shamrock);
    }
  .arrow.down {
    color: var(--color-cinnabar);
    border-color: var(--color-cinnabar);
    background-color: var(--color-cinderella);
  }
    .arrow.down path {
      stroke: var(--color-cinnabar);
    }

  .arrow.alter.up {
    background: var(--color-shamrock);
  }
  .arrow.alter.down {
    background: var(--color-cinnabar);
  }
    .arrow.alter path {
      stroke: white;
    }
</style>