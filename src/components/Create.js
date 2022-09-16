import React, { useState } from 'react'
import axios from 'axios';
import Read from './Read'

function Create() {

  const [addTodo, setAddTodo] = useState('');
  const sendDataToAPI = () => {

    if (addTodo.length > 3) {
      axios.post(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud`, { addTodo });
      //useState ile eklediğimiz "addTodo"yu mockapi'a gönderiyoruz.

    } else {
      alert("Please enter more than 3 characters.")
    }

  }

  return (
    <>
      <form>
        <div className="create-todo">
          <h1>Welcome {localStorage.getItem('token-info').replace(/(^"|"$)/g, '')}</h1>

          <div>
            <input
              className="todo-input"
              type="text"
              onChange={(e) => setAddTodo(e.target.value)}
              placeholder="Add todo"
            />
            <button
              className="todo-button"
              type="submit"
              onClick={sendDataToAPI}>Add Todo
            </button>
          </div>
        </div>
      </form>
      <Read />

    </>
  )
}

export default Create