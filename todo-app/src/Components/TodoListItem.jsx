import { Button, ButtonGroup, ListGroup } from "react-bootstrap"
import { FaCheck, FaTrash } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const TodoListItem = ({ todo, removeTodo, toggleCompleted }) => {

  const { id, text, completed } = todo

  return (
    <ListGroup.Item style={{
      backgroundColor: completed ? "lightgreen" : "whitesmoke",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <p style={{
        marginBottom: 0,
        textDecoration: completed ? "line-through" : null,
      }}>
        {text}
      </p>
      <ButtonGroup>
        <Button onClick={() => toggleCompleted(id)} variant="info">
          {completed ? <ImCross /> : <FaCheck />}
        </Button>
        <Button onClick={() => removeTodo(id)} variant="danger">
          <FaTrash />
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  )

}

export default TodoListItem