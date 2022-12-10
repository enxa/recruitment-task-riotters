<script setup>
  const { coin } = defineProps(['coin'])

  const { data, pending, error } = await useFetch(`/api/chart?coin=${coin.id}`)

  console.log(data)
</script>

<template>
  <section class="summary-coin">
    <div>
      <img :src="coin.image" :alt="coin.name" width="20">
    </div>
    <div>
      <h6>{{coin.symbol.toUpperCase()}}</h6>
      <h5>{{coin.name}}</h5>
    </div>
    <div>
      <h6>Price</h6>
      <h5>{{coin.current_price.toLocaleString()}}</h5>
    </div>
    <div>
      <h6>Change</h6>
      <h5 :class="[coin.price_change_percentage_24h > 0 ? 'up' : 'down']">{{coin.price_change_percentage_24h.toFixed(2)}}%</h5>
    </div>
    <hr>
  </section>
</template>

<style scoped>
      h6 {
        color: gray;
      }
      h5.up {
        color: green;
      }
      h5.down {
        color: red
      }

</style>