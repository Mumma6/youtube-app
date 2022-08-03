import { useState } from "react"
import { Container } from "react-bootstrap"
import TodoList from "./TodoList"
import AddTodo from "./AddTodo"


const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
         ? {
          ...todo,
          completed: !todo.completed,
          }
         : todo
      )
    )
  }

  return (
    <Container style={{
      backgroundColor: "white",
      width: 600,
      marginTop: 50,
      padding: 20,
      borderRadius: 5,
      boxShadow: "0 5px 5px rgba(0, 0, 0, .2)"
    }}>
      <h2>Todos</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    </Container>
  )
}


export default Todo