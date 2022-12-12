export const useSelectedCoin = () => {
  const { data, error } = useFetch('/api/coins')
  
  return data ? useState(() => data[0]) : useState(() => error)
}