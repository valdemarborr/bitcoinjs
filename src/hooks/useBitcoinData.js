import axios from "axios"
import { useQuery } from "react-query"

const url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"


const fetchBitcoinData =  () => {
    return axios.get(url)
  }

export const useBitcoinData = (activepage, pagelen) => {
    return useQuery('bitcoin-data', fetchBitcoinData,
    {
        select: (data) => {
            const bitcoindata = data.data.Data.Data.reverse()
            return bitcoindata
        }
    //     select: (data) => {
    //         const bitcoindata = data.data.Data.Data.reverse()
    //         var dataend = 20
    //         const datastart = (activepage-1)*pagelen
    //         if (activepage*pagelen > bitcoindata.length) {
    //             let dataend = (bitcoindata.length)
    //           } else {
    //             let dataend = (activepage*pagelen)
    //           }
    //         const sliceddata = bitcoindata.slice(datastart,dataend)
    //         return sliceddata
    //     },
    }
    )
}