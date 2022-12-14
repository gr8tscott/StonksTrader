import react from 'react'
import { useState, useEffect } from 'react'
const finnhub = require('finnhub')

const Quotes = ({ ticker, id, deleteStock }) => {
  const [quotes, setQuotes] = useState([])

  const api_key = finnhub.ApiClient.instance.authentications['api_key']
  // api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY
  api_key.apiKey = 'cc8atrqad3iciiq4952g'
  const finnhubClient = new finnhub.DefaultApi()

  const getQuotes = () => {
    finnhubClient.quote(`${ticker}`, (error, data, response) => {
      let something = data
      setQuotes(something)
    })
  }
  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="quotebar">
      <table>
        <tr>
          <td>
            <button
              className="stockdeletebutton"
              onClick={() => deleteStock(id)}
            >
              Remove
            </button>
          </td>
          <td>{ticker}</td>
          <td>${quotes.c}</td>
          <div className={quotes.d > 0 ? 'mark-positive' : 'mark-negative'}>
            <td>
              ${quotes.d}/ {quotes.dp}%
            </td>
          </div>
          <td>${quotes.o}</td>
          <td>${quotes.pc}</td>
          <td>${quotes.h}</td>
          <td>${quotes.l}</td>
        </tr>
      </table>
    </div>
  )
}

export default Quotes
