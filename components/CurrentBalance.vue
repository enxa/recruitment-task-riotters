<script setup>
  let currentBalance = 21432.23.toLocaleString().replace(',', ' ')
  let changePercentage = 12
</script>

<template>
  <section class="current-balance">
    <h3>Current Balance</h3>
    <h2>
      <span>$</span>
      {{currentBalance}}
    </h2>
    <p class="balance">
      <Arrow :size="'1.8rem'" :change="changePercentage > 0 ? 'up alter' : 'down alter'"/> &nbsp;
      <span :class="changePercentage > 0 ? 'up' : 'down'">{{changePercentage}}% vs last month</span>
    </p>
    <div>
      <Button :className="'alter'">Quick Invest</Button> &nbsp; 
      <Button>Show Report</Button>
    </div>
  </section>
</template>

<style scoped>
  @media (min-width: 640px) {
    .current-balance {
      padding: 3.2rem;
    }
  }
    h3 {
      font: var(--font-large-medium);
      margin-bottom: 4.0rem;
    }
    h2 {
      font: var(--font-huge-light);
    }
    
      h2 span {
        color: var(--color-manatee);
      }
    p {
      font: var(--font-big-medium);
      margin: 1.6rem 0 7.2rem 0;
      display: flex;
      align-items: center;
    }
      p span.up {
        color: var(--color-shamrock);
      }
      p span.down {
        color: var(--color-cinnabar);
      }
</style>