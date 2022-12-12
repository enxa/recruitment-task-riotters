<script setup>
  const { coin } = defineProps(['coin'])
</script>

<template>
  <section class="tab-summary-coin">
    <div class="image">
      <img :src="coin.image" :alt="coin.name">
    </div>
    <div class="symbol">
      <h6>{{coin.symbol.toUpperCase()}}</h6>
      <h5>{{coin.name}}</h5>
    </div>
    <div class="price">
      <h6>Price</h6>
      <h5>{{coin.current_price.toLocaleString()}}</h5>
    </div>
    <div class="change">
      <h6>Change</h6>
      <h5 :class="coin.price_change_percentage_24h > 0 ? 'up' : 'down'">{{coin.price_change_percentage_24h.toFixed(2)}}%
        &nbsp;<Arrow :size="'16px'" :change="coin.price_change_percentage_24h > 0 ? 'up' : 'down'"/>
      </h5>
    </div>
    <div class="chart">
      <TabSummaryChart :chart="coin.chart" :id="coin.id" :change="[coin.price_change_percentage_24h > 0 ? 'green' : 'red']"/>
    </div>
    <div class="buy-sell">
      <Button>Sell</Button> &nbsp; 
      <Button :className="'alter'">Buy</Button>
    </div>
  </section>
</template>

<style scoped>
  .tab-summary-coin {
    display: grid;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    background: var(--color-white);
    margin: .8rem 0;
    padding: 1rem;
    border: 1px solid var(--color-whisper);
    border-radius: .8rem;
  }
  @media (min-width: 640px) {
    .tab-summary-coin {
      grid-template-columns: 1fr 2fr 2fr 2fr 3fr;
      padding: 2.3rem;
    }
  }
    .image {
      width: 4.8rem;
      padding: .8rem;
      border: 1px solid var(--color-whisper);
      background: var(--color-white);
      border-radius: 4rem;
    }
      .change h5 {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
      }
      .change h5.up {
        color: var(--color-shamrock);
      }
      .change h5.down {
        color: var(--color-cinnabar);
      } 
      h6 {
        font: var(--font-small-light);
        color: var(--color-manatee);
        padding: .3rem 0;
      }
      h5 {
        font: var(--font-small-semibold);
        color: var(--color-blackpearl);
        padding: .3rem 0;
      }

  @media (min-width: 640px) {
    .summary-coin {
      grid-template-columns: 0.25fr 1fr 1fr 1fr;
    }
    .chart {
      grid-column: 1/5;
    }
    .buy-sell {
      grid-column: 1/5;
    }
  }
  @media (min-width: 960px) {
    .summary-coin {
      grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 1fr;
    }
    .chart {
      grid-column: 5/6;
    }
    .buy-sell {
      grid-column: 6/7;
      text-align: right;
    }
  }
</style>