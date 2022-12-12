<script setup>
  const coins = useCoins()

  const activeTab = ref('Summary')

  const handleClick = tab => activeTab.value = tab

  const tabs = ref([
    'Summary',
    'Table',
    'Charts',
    'Reporting',
    'Analysis'
  ])
</script>

<template>
  <section class="tabs">
    <div class="buttons">
      <template v-if="tabs" v-for="tab in tabs">
        <button @click="handleClick(tab)" :class="activeTab === tab ? 'active' : ''">{{tab}}</button>
      </template>
    </div>

    <div class="components" v-if="activeTab === 'Summary'">
      <TabSummary :coins="coins" />
    </div>
    <div v-if="activeTab === 'table'"></div>
    <div v-if="activeTab === 'charts'"></div>
    <div v-if="activeTab === 'reporting'"></div>
    <div v-if="activeTab === 'analysis'"></div>
  </section>
</template>

<style scoped>
  .tabs {
    min-height: 50vh;
  }
  @media (min-width: 640px) {
    .tabs {
      padding: 3.2rem;
    }
  }
    .buttons {
      display: flex;
      flex-flow: column nowrap;
      gap: 2.4rem;
      margin-bottom: 5rem;
    }
    @media (min-width: 640px) {
      .buttons {
        flex-flow: row wrap;
      }
    }
      button {
        font: var(--font-regular-medium);
        background: transparent;
        color: var(--color-manatee);
        cursor: pointer;
        padding: 1.1rem 0;
        position: relative;
      }
      button::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: .4rem;
        background: var(--color-electricviolet);
        transition: 1s ease-in-out width;
      }
      button.active::after {
        width: 100%;
      }

</style>