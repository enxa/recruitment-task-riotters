export const useCoins = () => {
  const { data, error } = useFetch('/api/coins')
  
  return data ? useState(() => data) : useState(() => error)
}