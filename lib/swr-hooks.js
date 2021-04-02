import useSWR from 'swr'

function fetcher(url) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries() {
  const { data, error } = useSWR(`/api/get-entries`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}
