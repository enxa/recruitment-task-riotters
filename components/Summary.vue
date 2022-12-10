<script setup>
  const { data, pending, error } = useFetch('/api/coins')

  const coins = useState(() => data)
</script>

<template>
  <section class="summary">
    <template v-if="pending">
      <div>Loading...</div>
    </template>
    <template v-else v-for="coin in coins" :key="coin.id">
      <CoinSummary :coin="coin" />
    </template>
    <template v-if="error">
      <div>{{error}}</div>
    </template>
  </section>
</template>