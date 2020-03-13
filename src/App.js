import React, { useState, useEffect } from 'react'
import './app.css'
import {
  Navbar,
  Content
} from './components'


const LOCAL_STORAGE_KEY = 'TODOAPP.TODOS'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) setTodos(storageTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  const handleAddItem = ({ title, content }) => setTodos(prev => [...prev, { id: prev.length, title: title, content: content, completed: false }])
  const handleDeleteItem = (key) => {
    let arr = [...todos]
    arr = arr.filter(item => item.id !== key)
    setTodos(arr)
  }
  const handleToggleItem = (key) => {
    let items = [...todos]
    const item = items.find(i => i.id === key)
    item.completed = !item.completed
    setTodos(items)
  }
  
  return (
    <>
      <Navbar
        addItem={handleAddItem}
      />
      <Content 
        todos={todos} 
        deleteItem={handleDeleteItem} 
        toggleItem={handleToggleItem}
      />
    </>
  )
}
export default App