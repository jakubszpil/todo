import React from 'react'
import {
  TodoList
} from '.././components'
const Content = ({ todos, deleteItem, toggleItem }) => {
  return (
    <main>
      <div>
        <TodoList
          todos={todos}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      </div>
    </main>
  )
}

export default Content