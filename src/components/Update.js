import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Read from './Read'

function Update() {
  const navigate = useNavigate();

  const [addTodo, setAddTodo] = useState('');
  const [ID, setID] = useState(null);

  const updateData = () => {
    axios.put(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud/${ID}`, { addTodo });
    navigate('/');

  }

  useEffect(() => {
    setAddTodo(localStorage.getItem('addTodo'));
    setID(localStorage.getItem('ID'))
  }, [])
  return (
    <>
      <Read />
      <div className="addName">
        <form>
          <div>
            <input
              className="todo-input"
              type="text"
              onChange={(e) => setAddTodo(e.target.value)}
              value={addTodo}
            />
            <button
              className="todo-button-save"
              type="submit"
              onClick={updateData}>Save</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Update