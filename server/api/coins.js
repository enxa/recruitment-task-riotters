export default defineEventHandler(async event => {
  const { baseUrl, requestHeaders } = useRuntimeConfig()
  let { currency = 'usd', days = '30', page = '1', perPage = '10', order = 'market_cap_desc' } = getQuery(event)

  const options = {
    method: 'GET',
    headers: JSON.parse(requestHeaders),
  }

  const coinsMarkets = await $fetch(`${baseUrl}/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}&order=${order}`, options)

  let result = coinsMarkets.map(async coinMarkets => {
    const chart = await $fetch(`${baseUrl}/coins/${coinMarkets.id}/market_chart?vs_currency=${currency}&days=${days}`, options)
    coinMarkets.chart = chart.prices
    return coinMarkets
  })

  return await Promise.all(result)
})
