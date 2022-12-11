<script setup>
  const selectedCoin = useSelectedCoin()

  console.log(selectedCoin.value)
</script>

<template>
  <section class="summary-selected-coin">
    <div v-if="selectedCoin" class="chart" :key="selectedCoin.id">
      <SummaryChart :chart="selectedCoin.chart" :id="`select-${selectedCoin.id}`"/>
    </div>
  </section>
</template>