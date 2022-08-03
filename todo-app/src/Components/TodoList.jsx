import { ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, removeTodo, toggleCompleted }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ListGroup>
  )
}

export default TodoList