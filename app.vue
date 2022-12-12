<template>
  <section class="app">
    <NuxtLayout>
      <div class="layout-app">
        <aside></aside>
        <main>      
          <div class="search">
            <SearchInput />
          </div>
          <div class="curent-balance">
            <CurrentBalance />
          </div>
          <div class="tabs">
            <Tabs />
          </div>
          <div class="summary">
            <Summary />
          </div>
        </main>
      </div>
    </NuxtLayout>
  </section>
</template>

<style scoped>
  .layout-app {
    height: 100%;
    max-width: 1440px;
    max-height: 900px;
    background: var(--color-white);
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: stretch;
  }
  @media (min-width: 960px) {
    .layout-app {
      grid-template-columns: 26.4rem 1fr;
    }
  }
  aside {
    width: 0;
  }
  @media (min-width: 960px) {
    aside {
      width: 26.4rem;
      background: var(--color-athensgray);
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 3.2rem;
    overflow: auto;
    padding: 1rem;
  }
  @media (min-width: 960px) {
    main {
      padding: 4.9rem 6.8rem;

    }
  }
    main div {
      background: var(--color-athensgray);
      border-radius: .8rem;
      padding: 1rem;
      align-items: center;;
    }
      .notification-icon {
        grid-column: 3/5;
      }
      .search {
        grid-column: 1/5;
      }
      .curent-balance {
        grid-column: 1/5;
      }
      .summary {
        grid-column: 1/5;
      }
      .tabs {
        grid-column: 1/5;
      }

    @media (min-width: 960px) {
      .notification-icon {
        grid-row: 1/2;
        grid-column: 4/5;
      }
      .search {
        width: 25rem;
        grid-row: 1/2;
      }
      .curent-balance {
        grid-column: 1/3;
        grid-row: 2/3;
        height: 100%;
      }
      .summary {
        grid-column: 3/5;
        grid-row: 2/3;
        height: 100%;
      }
      .tabs {
        grid-column: 1/5;
      }
    }
</style>
