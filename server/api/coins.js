export default defineEventHandler(async (event) => {
  const { baseUrl, requestHeaders } = useRuntimeConfig()
  const { currency = 'usd', page = '1', perPage = '25', order = 'market_cap_desc' } = getQuery(event)

  const url = `${baseUrl}/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}&order=${order}`

  const options = {
    method: 'GET',
    headers: JSON.parse(requestHeaders),
  }

  const coinsMarkets = await $fetch(url, options)

  return coinsMarkets
})
