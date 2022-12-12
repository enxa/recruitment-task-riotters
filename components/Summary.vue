<script setup>
  const selectedCoin = useSelectedCoin()
</script>

<template>
  <section class="summary">
    <h3>Summary</h3>
    <div v-if="selectedCoin" class="chart" :key="selectedCoin.id">
      <SummaryChart :chart="selectedCoin.chart" :id="`select-${selectedCoin.id}`"/>
    </div>
    <div v-else>
      <p>Click coin to show summary</p>
    </div>
  </section>
</template>

<style scoped>
  @media (min-width: 640px) {
    .summary {
      padding: 3.2rem;
    }
  }
    h3 {
      font: var(--font-large-medium);
      margin-bottom: 4.0rem;
    }
</style>