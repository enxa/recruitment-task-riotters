<script setup>
  import Chart from 'chart.js/auto'

  const { chart, id, change } = defineProps(['chart', 'id', 'change'])

  onMounted(async () => {
    const data = await chart.map(c => ({ timestamp: c[0], price: c[1] }))

    if (data) new Chart(
      document.getElementById(`${id}`),
      {
        type: 'line',
        data: {
          labels: data.map(row => new Date(row.timestamp).toLocaleString()),
          datasets: [{ 
            label: '',
            data: data.map(row => row.price),
            borderColor: change,
            backgroundColor: change,
            // borderWidth: 1
            pointRadius: 1,
            cubicInterpolationMode: 'monotone',
            tension: 1,
          }]
        },
        options: {
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      }
    )
  })
</script>

<template>
  <section class="chart">
    <canvas :id="id"></canvas>
  </section>
</template>

<style scoped>
  .chart {
    width: 100%;
    max-width: 150px;
    max-height: 100px;
  }
</style>