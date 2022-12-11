export default defineEventHandler(async (event) => {
  const { baseUrl, requestHeaders } = useRuntimeConfig()
  const { coin = 'bitcoin', currency = 'usd', days = '30' } = getQuery(event)

  const url = `${baseUrl}/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`

  const options = {
    method: 'GET',
    headers: JSON.parse(requestHeaders),
  }

  const coinChart = await $fetch(url, options)

  return coinChart.prices
})
