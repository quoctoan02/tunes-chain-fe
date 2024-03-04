import swr, { SWRConfiguration } from "swr"

export const swrConfig: SWRConfiguration = <const>{ revalidateOnFocus: false, shouldRetryOnError: false }

export const useSWR = swr
