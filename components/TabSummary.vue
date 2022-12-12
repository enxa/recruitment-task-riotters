<script setup>
  const { coins } = defineProps(['coins'])
  
  const selectedCoin = useSelectedCoin()
  
  const handleClick = coin => selectedCoin.value = coin
</script>

<template>
  <section class="tab-summary">
    <template v-for="coin in coins" :key="coin.id">
      <TabSummaryCoin :coin="coin" @click="handleClick(coin)"/>
    </template>
  </section>
</template>