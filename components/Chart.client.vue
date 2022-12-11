<script setup>
  import Chart from 'chart.js/auto'

  const { chart, id } = defineProps(['chart', 'id'])

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
            // borderColor: 'none',
            // backgroundColor: 'none',
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
    <div style="width: 300px;"><canvas :id="id"></canvas></div>
  </section>
</template>