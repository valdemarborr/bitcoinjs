import React, { useEffect, useState } from 'react';
import '../App.css';
import './TableStyling.css';
import { useBitcoinData } from '../hooks/useBitcoinData';



const Table = () => {
  const [activepage, setActivepage] = useState(1)

  let pagelen = 20  

  const {isLoading, data, refetch, isError, error} = useBitcoinData(activepage, pagelen)

    let pages = [1,2,3,4,5]

  function dateConverter(datadate) {
    return(new Date(datadate*1000).toLocaleDateString('en-GB'))
  };

  const handlePageChange = (event) => {
    setActivepage(event)
    // console.log(event)
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }


  return (
    <>
      <div className='TableContainer'>
        <table className='TableStyler'>
          <tr className='TableHead'>
            <th className='TableItem'>Date</th>
            <th className='TableItem'>High</th>
            <th className='TableItem'>Low</th>
            <th className='TableItem'>Open</th>
            <th className='TableItem'>Close</th>
          </tr>
          {data.slice((activepage-1)*pagelen, activepage*pagelen).map((bd, key) => {return(
            <tr> 
              <td className='TableItem'>{dateConverter(bd.time)}</td>
              <td className='TableItem'>{bd.high}</td>
              <td className='TableItem'>{bd.low}</td>
              <td className='TableItem'>{bd.open}</td>
              <td className='TableItem'>{bd.close}</td>
            </tr>
        )})}
        </table>
      </div>
      <div className='PaginationContainer'>
        {pages.map((pagenumber, key) => {return(
          <button onClick={() => handlePageChange(pagenumber)} className={`PaginationButton ${key === activepage ? "active" : ""}`}>{pagenumber}</button>
        )})}
      </div>
    </>
  )
}

export default Table