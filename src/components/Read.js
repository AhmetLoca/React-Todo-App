import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://6318d4d9f6b281877c77d58b.mockapi.io/Crud')
      .then((getData) => {
        setApiData(getData.data);
        // Mockapi'e eklenen data'ları get ile alıyoruz.
      })
  }, [])

  const setData = (id, userName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('userName', userName)
  }

  const getData = () => {
    axios.get('https://6318d4d9f6b281877c77d58b.mockapi.io/Crud')
      .then((getData) => {
        setApiData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      })
  }

  return (


    <div className="ddd">
      <table className="styled-table">

        <tbody>

          {apiData.map((data, index) => {
            return (

              <tr key={index}  >
                <th scope="row"></th>
                <td>{data.addTodo}</td>
                <Link to='/update'>
                  <td>
                    <button
                      className="button-update"
                      type="button"
                      onClick={() => setData(data.id, data.addTodo)}>Update
                    </button>
                  </td>
                </Link>
                <td><button
                  className="button-delete"
                  type="button"
                  onClick={() => onDelete(data.id)}
                >Delete</button></td>
              </tr>

            )
          })}
        </tbody>
      </table>
    </div>


  )
}

export default Read